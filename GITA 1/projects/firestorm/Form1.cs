namespace firestorm
{
    public partial class Form1 : Form
    {
        //declare a list for bullets
        //array list can grow and shrink
        List<PictureBox> bulletList = new List<PictureBox>();
        int bulletCount = 0;


        public Form1()
        {
            InitializeComponent();
          
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {

            

            KeyEventArgs key = e;
            int keyValue = key.KeyValue;

            if(keyValue == 37)
            {
                lblSpaceShip.Left -= 10;

            }
            else if(keyValue == 39)
            {
                lblSpaceShip.Left += 10;
            }

            if(keyValue == 32)
            { 
                bulletList.Add(new PictureBox());
                //dynamically add a picture box to the form

                this.Controls.Add(bulletList.ElementAt(bulletCount));

                bulletList.ElementAt(bulletCount).Height = 10;
                bulletList.ElementAt(bulletCount).Width = 10;
                bulletList.ElementAt(bulletCount).Image = Image.FromFile("pb.jpg", true);
                bulletList.ElementAt(bulletCount).Left = lblSpaceShip.Left + (lblSpaceShip.Width / 2);
                bulletList.ElementAt(bulletCount).Top = lblSpaceShip.Top - 10;
                bulletList.ElementAt(bulletCount).SizeMode = PictureBoxSizeMode.StretchImage;

                bulletCount++;
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            moveBullet();
        }

        private void moveBullet()
        {
            for (int i = 0; i < bulletList.Count; i++)
            {
                bulletList.ElementAt(i).Top -= 10;


            }

            for(int j = 0; j < bulletList.Count; j++)
            {
                if (lblTarget.Bounds.IntersectsWith(bulletList.ElementAt(j).Bounds))
                {
                    lblTarget.Width -= 5;

                    this.Controls.Remove(bulletList.ElementAt(j));
                    bulletList.Remove(bulletList.ElementAt(j));
                    bulletCount--;
                }
            }

            for (int k = 0; k < bulletList.Count; k++)
            {
                if (bulletList.ElementAt(k).Top < 0)
                {
                    this.Controls.Remove(bulletList.ElementAt(k));
                    bulletList.Remove(bulletList.ElementAt(k));
                    bulletCount--;

                    if (bulletCount <= 0)
                        bulletCount = 0;
                    break;

                }

            }
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            
        }

        private void aboutToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void fileToolStripMenuItem_Click(object sender, EventArgs e)
        {
        
        }
    }
}