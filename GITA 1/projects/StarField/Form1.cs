namespace StarField
{
    public partial class Form1 : Form
    {

        //declare an array to store the stars
        Label[] Universe = new Label[8];
        System.Random r = new System.Random((int)
        System.DateTime.Now.Ticks);

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //assign each star a position in the Array
            Universe[0] = star0;
            Universe[1] = star1;
            Universe[2] = star2;
            Universe[3] = star3;
            Universe[4] = star4;
            Universe[5] = star5;
            Universe[6] = star6;
            Universe[7] = star7;

            for (int n = 0; n < Universe.Length; n++)
            {
                int randomX = r.Next(0, this.Width);
                int randomY = r.Next(0, this.Height);
                Universe[n].Left = randomX;
                Universe[n].Top = randomY;
                int theWidth = r.Next(1, 11);
                Universe[n].Width = theWidth;
                Universe[n].Height = theWidth;
            }
        }

        private void growStars()
        {
            //grow the stars
            for (int i = 0; i < Universe.Length; i++)
            {
                int xMod = 0;
                int yMod = 0;
                Universe[i].Width += 1;
                Universe[i].Height += 1;

                if (Universe[i].Top > this.Height / 2)
                    yMod = 10;
                else
                    yMod = -10;

                if (Universe[i].Left > this.Width / 2)
                    xMod = 10;
                else
                    xMod = -10;
          
                Universe[i].Left += xMod;
                Universe[i].Top += yMod;

                if (Universe[i].Width > 10 || Universe[i].Left > this.Width || Universe[i].Left < 0 || Universe[i].Top > this.Height || Universe[i].Top < 0)
                {
                    int randomX = r.Next(0, this.Width);
                    int randomY = r.Next(0, this.Height);
                    Universe[i].Left = randomX;
                    Universe[i].Top = randomY;
                    Universe[i].Width = 1;
                    Universe[i].Height = 1;
                }
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            growStars();
        }
    }
}