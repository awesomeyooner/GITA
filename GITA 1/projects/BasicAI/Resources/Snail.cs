using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Timers;

namespace BasicAI.Resources
{
    public class Snail
    {
        //creates a new snail to make life easier
        private PictureBox pic;
        private System.Windows.Forms.Timer timer;
        private Label healthBar;

        public Snail(PictureBox pic, System.Windows.Forms.Timer timer, Label heathBar) {
            this.pic = pic;
            this.timer = timer;
            this.healthBar = heathBar;
        }

        public void spawn()
        {
            timer.Enabled = true;
        }

        public void kill()
        {
            timer.Enabled = false;
        }

        public double getHealth()
        {
            return healthBar.Width;
        }
    }
}
