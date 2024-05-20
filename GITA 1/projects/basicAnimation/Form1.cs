namespace basicAnimation
{
    public partial class Form1 : Form
    {
        //declare our global variables
        private int xSpeed = 10;
        private int ySpeed = 10;
        private int score = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void moveTarget()
        {
            //check to see if object hits boundaries

            if(picTarget.Right > this.Width)
            {
                xSpeed *= -1;
            }
            else if(picTarget.Left < 0)
            {
                xSpeed *= -1;
            }

            picTarget.Left += xSpeed;
        }
        private void timer1_Tick(object sender, EventArgs e)
        {
            moveTarget();
        }

        private void picTarget_Click(object sender, EventArgs e)
        {

        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            //output keycode to the label
            lblOutput.Text = e.KeyValue.ToString();

            int whichKey = e.KeyValue;
            //this is the left arrow
            if(whichKey == 37)
            {
                picHappy.Left -= 10;
                //lblProjectile.Left = picHappy.Left + (picHappy.Width / 2);
            }
            //right arrow
            else if(whichKey == 39)
            {
                picHappy.Left += 10;
                //lblProjectile.Left = picHappy.Left + (picHappy.Width / 2);
            }

            

            //space bar turns on timer
            if(whichKey == 32)
            {
                gunTimer.Enabled = true;
                

            }
            if(!gunTimer.Enabled) 
            {
                lblProjectile.Left = picHappy.Left + (picHappy.Width / 2);
            }


        }

        private void moveBullet()
        {
            //moves projectile upward
            lblProjectile.Top -= 10;

            if(lblProjectile.Top < 0)
            {
                lblProjectile.Top = picHappy.Top;
                lblProjectile.Left = picHappy.Left + (picHappy.Width / 2);
                gunTimer.Enabled = false;
            }

            //check collision with target
            if(lblProjectile.Left > picTarget.Left &&
               lblProjectile.Right < picTarget.Right &&
                lblProjectile.Top > picTarget.Top &&
                lblProjectile.Bottom < picTarget.Bottom)
            {
                lblProjectile.Top = picHappy.Top;
                lblProjectile.Left = picHappy.Left + (picHappy.Width / 2);
                gunTimer.Enabled = false;
                score += 10;
            }

            lblOutput.Text = score.ToString();

        }
        private void gunTimer_Tick(object sender, EventArgs e)
        {
            //calls projectile function
            moveBullet();
        }
    }
}