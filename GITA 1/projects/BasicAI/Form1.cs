using BasicAI.Resources;
using Microsoft.VisualBasic.Devices;
using System.Windows.Forms.Design.Behavior;

//Programmer: Aaron Yoo
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

        PictureBox[] lives = new PictureBox[3];

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            snailTimer.Enabled = false;

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

        private void moveSnail(double x, double y)
        {
            picSnail.Left = (int)x - picSnail.Width / 2;
            picSnail.Top = (int)y - picSnail.Height / 2;
            
        }
        private void picHeavy_MouseClick(object sender, MouseEventArgs e)
        {
            
        }

        private void Form1_MouseClick(object sender, MouseEventArgs e)
        {
            deltaX = getDeltaX(false);
            deltaY = getDeltaY(false);
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

        private double getDeltaX(Boolean snail)
        {
            int heavyX = picHeavy.Left + (picHeavy.Width / 2);
            int heavyY = picHeavy.Top + (picHeavy.Height / 2);

            int snailX = picSnail.Left + (picSnail.Width / 2);
            int snailY = picSnail.Top + (picSnail.Height / 2);

            int mouseX = Cursor.Position.X;
            int mouseY = Cursor.Position.Y;

            if (!snail)
            {
                double mouseDeltaX = heavyX - mouseX;
                double mouseDeltaY = heavyY - mouseY;

                return mouseDeltaX;
            }
            else
            {
                double snailDeltaX = heavyX - snailX;
                double snailDeltaY = heavyY - snailY;

                return snailDeltaX;
            }
        }
        private double getDeltaY(Boolean snail)
        {
            int heavyX = picHeavy.Left + (picHeavy.Width / 2);
            int heavyY = picHeavy.Top + (picHeavy.Height / 2);

            int snailX = picSnail.Left + (picSnail.Width / 2);
            int snailY = picSnail.Top + (picSnail.Height / 2);

            int mouseX = Cursor.Position.X;
            int mouseY = Cursor.Position.Y;

            if (!snail)
            {
                double mouseDeltaX = heavyX - mouseX;
                double mouseDeltaY = heavyY - mouseY;

                return mouseDeltaY;
            }
            else
            {
                double snailDeltaX = heavyX - snailX;
                double snailDeltaY = heavyY - snailY;

                return snailDeltaY;
            }
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
            Boolean bulletHitD = false;
            if (bulletHit())
            {
                bulletHitD = true;
            }

            if (lblProj.Left > this.Width || lblProj.Right < 0 || lblProj.Top > this.Height || lblProj.Bottom < 0 || bulletHit())
            {
                if (bulletHitD)
                {
                    if (healthBar.Width > 0)
                    {
                        enrageSnail();
                        healthBar.Width -= 50;
                    }
                    if (healthBar.Width <= 0)
                    {
                        snailTimer.Enabled = false;
                        picSnail.Image = deadPic.Image;
                        gameEnd = true;
                        lblEnd.Text = "VICTORY!";
                        lblEnd.Visible = true;
                        lblEnd.BringToFront();

                        btnReset.Visible = true;
                        btnReset.Enabled = true;
                    }
                }

                    
                bulletFired = false;
                bulletTimer.Enabled = false;
                lblProj.Left = picHeavy.Left + (picHeavy.Width / 2);
                lblProj.Top = picHeavy.Top + (picHeavy.Height / 2);
                

            }


                
            fireProj(deltaX, deltaY);
        }

        private Boolean bulletHit()
        {
            return ((lblProj.Left > picSnail.Left &&
                     lblProj.Right < picSnail.Right &&
                     lblProj.Top > picSnail.Top &&
                     lblProj.Bottom < picSnail.Bottom));

        }


        private Boolean snailTouch()
        {
            return ((Math.Abs(picSnail.Left - picHeavy.Left) < picHeavy.Width  &&
                     Math.Abs(picSnail.Right - picHeavy.Right) < picHeavy.Width &&
                     Math.Abs(picSnail.Top - picHeavy.Top) < picHeavy.Height &&
                     Math.Abs(picSnail.Bottom - picHeavy.Bottom) < picHeavy.Height));
   
        }

        private void enrageSnail()
        {
            picSnail.Image = enragePic.Image;
            picSnail.Left -= (int)(getDeltaX(true) * .25);
            picSnail.Top -= (int)(getDeltaY(true) * .25);
        }

        private void picSnail_Click(object sender, EventArgs e)
        {

        }

        private void snailTimer_Tick(object sender, EventArgs e)
        {
            double x = picSnail.Left + (0.05 * getDeltaX(true));
            double y = picSnail.Top + (0.05 * getDeltaY(true));

            picSnail.Left = (int)x;
            picSnail.Top = (int)y;

            if(snailTouch())
            {
                takeDamage();
                picSnail.Left = this.Width;//this.Width - picSnail.Left;
                picSnail.Top = this.Height; //this.Height - picSnail.Top;
            }
            
        }

        private void takeDamage()
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

            picSnail.Image = snailBank.Image;
            picHeavy.Image = heavyBank.Image;
            gameEnd = false;
            lblEnd.Text = "VICTORY!";
            lblEnd.Visible = false;
            picSnail.Left = this.Width;
            picSnail.Top = this.Height;

            healthBar.Width = 1123;

            picHeavy.Top = 500;
            picHeavy.Left = 500;




        }
    }
}