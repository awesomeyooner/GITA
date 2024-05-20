namespace arrays
{
    public partial class Form1 : Form
    {
        //set up variables 
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        int smoilPos = 0;
        Boolean onOff = false;

        PictureBox[] smoilLib = new PictureBox[4];

        public Form1()
        {
            InitializeComponent();
        }

        

        private void Form1_Load(object sender, EventArgs e)
        {
            //this code runs one time when program loads
            //set up the tank
            smoilLib[0] = picBox0;
            smoilLib[1] = picBox1;
            smoilLib[2] = picBox2;
            smoilLib[3] = picBox3;

            
        }
        private void btnMove_Click(object sender, EventArgs e)
        {
            moveImage();
        }
        private void moveImage()
        {


            //moves the smoil to a random spot
            smoilLib[smoilPos].Image = null;
            smoilPos = r.Next(0, 4);
            smoilLib[smoilPos].Image = picPB.Image;
        }

        private void btnAuto_Click(object sender, EventArgs e)
        {
            if(onOff == false)
            {
                onOff = true;
                timer1.Enabled = true;
            }
            else if(onOff == true)
            {
                onOff = false;
                timer1.Enabled = false;
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            moveImage();
        }
    }
}