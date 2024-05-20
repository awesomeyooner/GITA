using BasicAI;
using Microsoft.VisualBasic.Devices;
using System.Drawing.Text;
using System.Windows.Forms.Design.Behavior;

//Programmer: Aaron Yoon
//Project: Basic AI
//date: 2/28/23
namespace BasicAI
{
    public partial class Form1 : Form
    {
        int heavyMoveSpeed = 20;
        double deltaX = 1;
        double deltaY = 1;
        Boolean bulletFired = false;
        Boolean gameEnd = false;

        private static Form1 instance = new Form1();

        public static PictureBox[] lives = new PictureBox[3];
        Snail snail1;
        Snail snail2;
        Snail snail3;
        Snail snail4;
        Snail snail5;
        Snail snail6;
        Snail snail7;
        Snail snail8;
        Snail snail9;
        Snail snail10;

        Snail[] snails = new Snail[10];

        int points = 0;

        public Form1()
        {
            InitializeComponent();
            snail1 = new Snail(picSnail, snailTimer, healthBar, picHeavy, lblProj);
            snail2 = new Snail(picSnail2, snailTimer2, healthBar2, picHeavy, lblProj);
            snail3 = new Snail(picSnail3, snailTimer3, healthBar3, picHeavy, lblProj);
            snail4 = new Snail(picSnail4, snailTimer4, healthBar4, picHeavy, lblProj);
            snail5 = new Snail(picSnail5, snailTimer5, healthBar5, picHeavy, lblProj);
            snail6 = new Snail(picSnail6, snailTimer6, healthBar6, picHeavy, lblProj);
            snail7 = new Snail(picSnail7, snailTimer7, healthBar7, picHeavy, lblProj);
            snail8 = new Snail(picSnail8, snailTimer8, healthBar8, picHeavy, lblProj);
            snail9 = new Snail(picSnail9, snailTimer9, healthBar9, picHeavy, lblProj);
            snail10 = new Snail(picSnail10, snailTimer10, healthBar10, picHeavy, lblProj);

            snails[0] = snail1;
            snails[1] = snail2;
            snails[2] = snail3;
            snails[3] = snail4;
            snails[4] = snail5;
            snails[5] = snail6;
            snails[6] = snail7;
            snails[7] = snail8;
            snails[8] = snail9;
            snails[9] = snail10;



        }

        public static Form1 getInstance()
        {
            return instance;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

            for(int i = 0; i < 10; i++)
            {
                snails[i].reset();
            }

            lives[0] = life1;
            lives[1] = life2;
            lives[2] = life3;
        }

        private void moveHeavy(double x, double y)
        {
            picHeavy.Left = (int)x - (int)(picHeavy.Width * 1);
            picHeavy.Top = (int)y - (int)(picHeavy.Height / 2);
            picHeavy.Image = picHeavy.Image;
        }
        private void picHeavy_MouseClick(object sender, MouseEventArgs e)
        {
            
        }

        private void Form1_MouseClick(object sender, MouseEventArgs e)
        {
            deltaX = getDeltaX();
            deltaY = getDeltaY();
            bulletFired = true;
            bulletTimer.Enabled = true;
        }

        private void heavyTimer_Tick(object sender, EventArgs e)
        {
         
        }

        private void fireProj(double deltaX, double deltaY)
        {
            //change the rounding to a serate variable

            double slopeX = deltaY / deltaX;

            double x = lblProj.Left - (0.1 * deltaX);
            double y = lblProj.Top - (0.1 * deltaY);

            lblProj.Left = (int)x;
            lblProj.Top = (int)y;
            
        }

        private double getDeltaX()
        {
            int heavyX = picHeavy.Left + (picHeavy.Width / 2);
            int heavyY = picHeavy.Top + (picHeavy.Height / 2);

            int mouseX = Cursor.Position.X;
            int mouseY = Cursor.Position.Y;

           
                double mouseDeltaX = heavyX - mouseX;
                double mouseDeltaY = heavyY - mouseY;

                return mouseDeltaX;
         
        }
        private double getDeltaY()
        {
            int heavyX = picHeavy.Left + (picHeavy.Width / 2);
            int heavyY = picHeavy.Top + (picHeavy.Height / 2);

            int mouseX = Cursor.Position.X;
            int mouseY = Cursor.Position.Y;

        
                double mouseDeltaX = heavyX - mouseX;
                double mouseDeltaY = heavyY - mouseY;

                return mouseDeltaY;
           
        }
        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            int whichKey = e.KeyValue;
            //lblDebug.Text = whichKey.ToString();

            if (!gameEnd)
            {
                if (whichKey == 87) //w
                {
                    picHeavy.Top -= heavyMoveSpeed;
                }

                else if (whichKey == 65) //a
                {
                    picHeavy.Left -= heavyMoveSpeed;
                }

                else if (whichKey == 83) //s
                {
                    picHeavy.Top += heavyMoveSpeed;
                }

                else if (whichKey == 68) //d
                {
                    picHeavy.Left += heavyMoveSpeed;
                }

                if (!bulletFired)
                {
                    lblProj.Left = picHeavy.Left + (picHeavy.Width / 2);
                    lblProj.Top = picHeavy.Top + (picHeavy.Height / 2);
                }
            }
        }

        private void bulletTimer_Tick(object sender, EventArgs e)
        {
            
            

            if (snail1.autoDamage() 
                || snail2.autoDamage()
                || snail3.autoDamage()
                || snail4.autoDamage()
                || snail5.autoDamage()
                || snail6.autoDamage()
                || snail7.autoDamage()
                || snail8.autoDamage()
                || snail9.autoDamage()
                || snail10.autoDamage()
                )
            {
                resetBullet();
                points += 100;
                label1.Text = "Score: " + points.ToString();
            }

       

            if (lblProj.Left > this.Width || lblProj.Right < 0 || lblProj.Top > this.Height || lblProj.Bottom < 0 )
            {
                resetBullet();
                

            }


                
            fireProj(deltaX, deltaY);
        }

        public void resetBullet()
        {
            bulletTimer.Enabled = false;
            bulletFired = false;
           
            lblProj.Left = picHeavy.Left + (picHeavy.Width / 2);
            lblProj.Top = picHeavy.Top + (picHeavy.Height / 2);

        }


        private void picSnail_Click(object sender, EventArgs e)
        {

        }

        private void snailTimer_Tick(object sender, EventArgs e)
        {
            for(int i = 0; i < snails.Length; i++)
            {
                snails[i].pursuit();
            }

            for (int i = 0; i < snails.Length; i++)
            {
                if (snails[i].snailTouch())
                {
                    takeDamage();
                    snails[i].moveSnail(0, 0);
                }
            }


        }

        public void takeDamage()
        {
            if (lives[2].Image != null)
            {
                lives[2].Image = null;
            }
            else if (lives[1].Image != null)
            {
                lives[1].Image = null;
            }
            else if (lives[0].Image != null)
            {
                lives[0].Image = null;
                picHeavy.Image = picHeavyDead.Image;
                snailTimer.Enabled = false;
                gameEnd = true;
                lblEnd.Text = "GAME OVER!";
                lblEnd.Visible = true;
                lblEnd.BringToFront();

                btnReset.Visible = true;
                btnReset.Enabled = true;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {

            snailTimer.Interval = 100;
            if (snailTimer.Enabled)
            {
                snailTimer.Enabled = false;
            }
            else
            {
                snailTimer.Enabled = true;
            }
            btnStart.Visible = false;
            btnStart.Enabled = false;
            btnStart.SendToBack();
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            btnReset.Visible = false;
            btnReset.Enabled = false;

            snailTimer.Enabled = true;

            lives[2].Image = picLife.Image;
            lives[1].Image = picLife.Image;
            lives[0].Image = picLife.Image;

            bulletFired = false;

            picHeavy.Image = heavyBank.Image;
            gameEnd = false;
            lblEnd.Text = "VICTORY!";
            lblEnd.Visible = false;
             for(int i = 0; i < snails.Length; i++)
            {
                snails[i].reset();
            }
            points = 0;
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            for(int i = 0; i < snails.Length; i++)
            {
                snails[i].spawn();
            }
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }
    }
}