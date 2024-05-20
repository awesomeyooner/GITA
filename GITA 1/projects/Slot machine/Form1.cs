//programmer: Aaron Yoon
//date: 10/24/22
//project: slot machine simulation
using System.Text;

namespace Slot_machine
{
    public partial class Form1 : Form
    {
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        int bet = 0;
        int jackpot = 1000;
        int timesPlayed = 0;
        bool jackpotEnabled = false;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
                
            

        }

        private void btnQuit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnSpin_Click(object sender, EventArgs e)
        {
            int reel1 = r.Next(1, 6);
            int reel2 = r.Next(1, 6);
            int reel3 = r.Next(1, 6);

            timesPlayed += 1;

            txtMoneyCache.Text = (int.Parse(txtMoneyCache.Text) - getRadBet()).ToString();
            lblJackPot.Text = (int.Parse(lblJackPot.Text) + bet).ToString();
            setPics(reel1, reel2, reel3);

            if (jackpotEnabled && gotJackpot(reel1, reel2, reel3))
            {
                txtMoneyCache.Text = (int.Parse(txtMoneyCache.Text) + int.Parse(lblJackPot.Text)).ToString();
                lblJackPot.Text = 1000.ToString();
                MessageBox.Show("CONGRATS!!!", "YOU WIN!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                timesPlayed = 0;
            }

            lblDebug.Text = "Times played: " + timesPlayed.ToString();//reel1.ToString() + reel2.ToString() + reel3.ToString();
        }

        private void txtMoneyCache_TextChanged(object sender, EventArgs e)
        {
            try
            {
                if (int.Parse(txtMoneyCache.Text) >= bet)
                    btnSpin.Enabled = true;
                else
                    btnSpin.Enabled = false;
                            
            }
            catch
            {
                MessageBox.Show("Insufficient credits!");
            }

        }

        private void loopDeLoop()
        {
     
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            //loopDeLoop();
        }

        private int getRadBet()
        {
            if (radBet1.Checked)
                bet = 1;
            else if (radBet2.Checked)
                bet = 2;
            else if (radBet3.Checked)
                bet = 3;
            else if (radBet4.Checked)
                bet = 4;
            else if (radBet5.Checked)
                bet = 5;
            else
                MessageBox.Show("how did we get here?");

            if(bet == 5 )
                jackpotEnabled = true;
            else
                jackpotEnabled = false;

            return bet;
        }

        private bool gotJackpot(int roll1, int roll2, int roll3)
        {
            return (roll1 == roll2 && roll1 == roll3);
        }

        private void lblDebug_Click(object sender, EventArgs e)
        {

        }

        private void setPics(int roll1, int roll2, int roll3)
        {
            //sponge = 1
            //patrick = 2
            //krabs = 3
            //skidward = 4
            //plankton = 5

            if (roll1 == 1)
                picReel1.Image = imgSpangBob.Image;
            else if (roll1 == 2)
                picReel1.Image = imgPatrick.Image;
            else if (roll1 == 3)
                picReel1.Image = imgKrabs.Image;
            else if (roll1 == 4)
                picReel1.Image = imgSkidward.Image;
            else
                picReel1.Image = imgPlonktan.Image;

            if (roll2 == 1)
                picReel2.Image = imgSpangBob.Image;
            else if (roll2 == 2)
                picReel2.Image = imgPatrick.Image;
            else if (roll2 == 3)
                picReel2.Image = imgKrabs.Image;
            else if (roll2 == 4)
                picReel2.Image = imgSkidward.Image;
            else
                picReel2.Image = imgPlonktan.Image;

            if (roll3 == 1)
                picReel3.Image = imgSpangBob.Image;
            else if (roll3 == 2)
                picReel3.Image = imgPatrick.Image;
            else if (roll3 == 3)
                picReel3.Image = imgKrabs.Image;
            else if (roll3 == 4)
                picReel3.Image = imgSkidward.Image;
            else
                picReel3.Image = imgPlonktan.Image;
        }

        private void picReel1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }
    }
}