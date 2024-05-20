using BasicAI.Properties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Timers;

namespace BasicAI
{
    public class Snail
    {
        //creates a new snail to make life easier
        private PictureBox picSnail;
        private PictureBox picHeavy;
        private System.Windows.Forms.Timer timer;
        private Label healthBar;
        private Label projectile;

        Random r = new Random((int)DateTime.Now.Ticks);

        public Snail(PictureBox picSnail, System.Windows.Forms.Timer timer, Label heathBar, PictureBox picHeavy, Label projectile)
        {
            this.picSnail = picSnail; // pic snail
            this.picHeavy = picHeavy; // pic heavy
            this.timer = timer; //timer to control invidiual snail
            this.healthBar = heathBar; //healthbar that corresponds to individual snail
            this.projectile = projectile; //projectile that the heavy shoots 

            healthBar.Width = 100;

            timer.Interval = 20;
            timer.Enabled = false;
        }

        public void spawn()
        {
            //int location = r.Next(1, 5);
            // 1 | 2
            // 3 | 4
            healthBar.Width = 100;

            picSnail.Left = r.Next(0, 1000);
            picSnail.Top = r.Next(0, 1000);

            healthBar.Top = (int)(getDeltaY() * .25) + 40;
            healthBar.Left = ((int)(getDeltaX() * .25) - (picSnail.Width / 2)) + healthBar.Width;

            timer.Enabled = true;

            picSnail.Image = (Image)(Resources.snail1);
        }

        public void pursuit()
        {

            double x = picSnail.Left + 0.03 * getDeltaX();
            double y = picSnail.Top + 0.03 * getDeltaY();

            picSnail.Left = (int)x;
            picSnail.Top = (int)y;

            healthBar.Top = (int)y - 40;
            healthBar.Left = (int)x;
            
            if (snailTouch())
            {
                //Form1.getInstance().takeDamage();
                //moveSnail(0, 0);
            }
            
        }

        private double getDeltaX()
        {
            int heavyX = picHeavy.Left + picHeavy.Width / 2;
            int heavyY = picHeavy.Top + picHeavy.Height / 2;

            int snailX = picSnail.Left + picSnail.Width / 2;
            int snailY = picSnail.Top + picSnail.Height / 2;

            int mouseX = Cursor.Position.X;
            int mouseY = Cursor.Position.Y;

            double snailDeltaX = heavyX - snailX;
            double snailDeltaY = heavyY - snailY;

            return snailDeltaX;

        }
        private double getDeltaY()
        {
            int heavyX = picHeavy.Left + picHeavy.Width / 2;
            int heavyY = picHeavy.Top + picHeavy.Height / 2;

            int snailX = picSnail.Left + picSnail.Width / 2;
            int snailY = picSnail.Top + picSnail.Height / 2;

            double snailDeltaX = heavyX - snailX;
            double snailDeltaY = heavyY - snailY;

            return snailDeltaY;

        }

        public void kill()
        {
            picSnail.Image = (Image)(Resources.deadSnail);
            timer.Enabled = false;
            
        }

        public bool snailTouch()
        {/*
            return Math.Abs(picSnail.Left - picHeavy.Left) < picHeavy.Width &&
                     Math.Abs(picSnail.Right - picHeavy.Right) < picHeavy.Width &&
                     Math.Abs(picSnail.Top - picHeavy.Top) < picHeavy.Height &&
                     Math.Abs(picSnail.Bottom - picHeavy.Bottom) < picHeavy.Height;
            */
            return picSnail.Bounds.IntersectsWith(picHeavy.Bounds);

        }

        public double getHealth()
        {
            return healthBar.Width;
        }

        public void enrageSnail()
        {
            Form1.getInstance().resetBullet();
            picSnail.Image = (Image)Resources.enragedSnail; 
            picSnail.Left -= (int)(getDeltaX() * .25);
            picSnail.Top -= (int)(getDeltaY() * .25);

            healthBar.Top = (int)(getDeltaY() * .25) + 40;
            healthBar.Left = ((int)(getDeltaX() * .25) - (picSnail.Width / 2)) + healthBar.Width;
        }

        public void takeDamage()
        {
            healthBar.Width -=50;
        }

        public bool autoDamage()
        {
            if (bulletHit())
            {
                Form1.getInstance().resetBullet();
                if (getHealth() > 0)
                {

                    enrageSnail();
                    takeDamage();
                }
                if (getHealth() <= 0)
                {
                    //kill();
                    //reset();
                    spawn();
                }
                return true;
            }
            else
                return false;
        }

        public void moveSnail(int x, int y)
        {
            picSnail.Left = x;
            picSnail.Top = y;
        }

        public void reset()
        {
            healthBar.Width = 100;
            timer.Enabled = false;
            picSnail.Image = (Image)(Resources.snail1);

            healthBar.Top = (int)(getDeltaY() * .25) + 40;
            healthBar.Left = ((int)(getDeltaX() * .25) - (picSnail.Width / 2)) + healthBar.Width;

            moveSnail(0, 0);
        }

        public Boolean bulletHit()
        {
            return ((projectile.Left > picSnail.Left &&
                     projectile.Right < picSnail.Right &&
                     projectile.Top > picSnail.Top &&
                     projectile.Bottom < picSnail.Bottom));

        }
    }
}
