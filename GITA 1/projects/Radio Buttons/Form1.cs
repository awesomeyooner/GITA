using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Radio_Buttons
{
    public partial class radio_button : Form
    {
        //generate random numbers
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        public radio_button()
        {
            InitializeComponent();
        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnOK_Click(object sender, EventArgs e)
        {
            //determine the animal and services
            int serviceCount = 0;
            String messageString = "";

            if (chkShampoo.Checked)
                serviceCount += 1;
            if (chkShots.Checked)
                serviceCount += 1;
            if (chkGroom.Checked)
                serviceCount += 1;

            //select the animal
            if (radPolarBear.Checked)
            {
                messageString = "You selected: Polar Bear";
            }
            else if (radPenguin.Checked)
            {
                messageString = "You selected: Penguin";
            }
            else if (radOther.Checked)
            {
                messageString = "You selected: Other";
            }
            else
            {
                messageString = "Please select an option";
            }

            messageString = messageString + "\n" +
                "numer of services: " + serviceCount;

            MessageBox.Show(messageString,
                "RSVP",
                MessageBoxButtons.OK,
                MessageBoxIcon.Information);


        }

        private void radPolarBear_CheckedChanged(object sender, EventArgs e)
        {
            picBlank.Image = picPolarBear.Image;
        }

        private void radPenguin_CheckedChanged(object sender, EventArgs e)
        {
            picBlank.Image = picPenguin.Image;
        }

        private void radOther_CheckedChanged(object sender, EventArgs e)
        {
            picBlank.Image = null;
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void btnRandom_Click(object sender, EventArgs e)
        {
            //generate random number
            int myRandom = r.Next(1, 11);
            lblRandom.Text = myRandom.ToString();
            if (myRandom == 2)
            {
                picBlank.Image = picPenguin.Image;
            }
            else if (myRandom == 4)
            {
                picBlank.Image = picPolarBear.Image;
            }
            else
                picBlank.Image = null;

            if(myRandom == 1 || myRandom == 7)
            {
                MessageBox.Show("Winner winner",
                    "Your Number",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
                //this is and &&
            }

          
        }
    }
}
