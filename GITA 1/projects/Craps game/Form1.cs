//Programmer: Aaron Yoon
//Date: 9/30/22
//Project: craps Simulator

using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Dice_Game
{
    public partial class Form1 : Form
    {
        //make variables to track how many times a number was rolled
        double totalRolls = 0;
        int rolled2 = 0;
        int rolled3 = 0;
        int rolled4 = 0;
        int rolled5 = 0;
        int rolled6 = 0;
        int rolled7 = 0;
        int rolled8 = 0;
        int rolled9 = 0;
        int rolled10 = 0;
        int rolled11 = 0;
        int rolled12 = 0;

        double prob2 = 0;
        double prob3 = 0;
        double prob4 = 0;
        double prob5 = 0;
        double prob6 = 0;
        double prob7 = 0;
        double prob8 = 0;
        double prob9 = 0;
        double prob10 = 0;
        double prob11 = 0;
        double prob12 = 0;

        bool isRound2 = false;
        int point = 0;

        //generate random numbers
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnRoll_Click(object sender, EventArgs e)
        {
            arbiString.Visible = true;
            lblNumRolled.Visible = true;

            int randomizer1 = r.Next(1, 7);
            int randomizer2 = r.Next(1, 7);
            int numRolled = randomizer1 + randomizer2;


            lblRoll1.Text = randomizer1.ToString();
            lblRoll2.Text = randomizer2.ToString();
            lblNumRolled.Text = numRolled.ToString();

            picSetter(picRoll1, randomizer1);
            picSetter(picRoll2, randomizer2);

            if ((numRolled == 7 || numRolled == 11) && isRound2 == false)
            {
                MessageBox.Show("YOU WIN!!!",
                    "CONGRATS!!",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
                picWin.Visible = true;
                reset();
                lblOutput.Text = "Round 1";
            }

            else if((numRolled == 2 || numRolled == 3 || numRolled == 12) && isRound2 == false)
            {
                MessageBox.Show("YOU LOSE!!!",
                    "OH WELL, BETTER LUCK NEXT TIME!",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
                reset();
            }

            else if(!isRound2)
            {
                point = numRolled;
                isRound2 = true;
                setMarker(point);
                lblPoint.Text =  "Your point: " + point.ToString() + "\n" + "You need a: " + point.ToString() + " to win!";  
                lblOutput.Text = "Round 2";
            }

            else if (isRound2 && numRolled == 7)
            {
                MessageBox.Show("YOU LOSE!!!",
                    "GAME OVER",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
                reset();
            }

            else if(isRound2 && point == numRolled)
            {
                MessageBox.Show("YOU WIN!!!",
                    "GAME OVER",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
                picWin.Visible = true;
                reset();
            }
        }


        private void picSetter(PictureBox picture, int number)
        {
            if (number == 1)
                picture.Image = picDice1.Image;
            else if (number == 2)
                picture.Image = picDice2.Image;
            else if (number == 3)
                picture.Image = picDice3.Image;
            else if (number == 4)
                picture.Image = picDice4.Image;
            else if (number == 5)
                picture.Image = picDice5.Image;
            else if (number == 6)
                picture.Image = picDice6.Image;
        }

        private void setNumRolled(int num)
        {
            if (num == 2)
                rolled2 += 1;
            if (num == 3)
                rolled3 += 1;
            if (num == 4)
                rolled4 += 1;
            if (num == 5)
                rolled5 += 1;
            if (num == 6)
                rolled6 += 1;
            if (num == 7)
                rolled7 += 1;
            if (num == 8)
                rolled8 += 1;
            if (num == 9)
                rolled9 += 1;
            if (num == 10)
                rolled10 += 1;
            if (num == 11)
                rolled11 += 1;
            if (num == 12)
                rolled12 += 1;
        }

        private void reset()
        {
            lblOutput.Text = "Round 1";
            isRound2 = false;
            point = 0;
            picRoll1.Image = null;
            picRoll2.Image = null;
            lblRoll1.Text = null;
            lblRoll2.Text = null;
            lblNumRolled.Text = null;
            lblPoint.Text = "No point yet";
            toggleVisibleExcept(null, false);
            picWin.Visible = false;
        }

        private void setMarker(int point)
        {
            if (point == 4)
                toggleVisibleExcept(picMark4, false);
            else if (point == 5)
                toggleVisibleExcept(picMark5, false);
            else if (point == 6)
                toggleVisibleExcept(picMark6, false);
            else if (point == 8)
                toggleVisibleExcept(picMark8, false);
            else if (point == 9)
                toggleVisibleExcept(picMark9, false);
            else if (point == 10)
                toggleVisibleExcept(picMark10, false);
        }

        private void toggleVisibleExcept(PictureBox picture, bool isVisible)
        {
            picMark4.Visible = isVisible;
            picMark5.Visible = isVisible;
            picMark6.Visible = isVisible;
            picMark8.Visible = isVisible;
            picMark9.Visible = isVisible;
            picMark10.Visible = isVisible;

            if (picture == null)
                return;
            else
            picture.Visible = !isVisible;
        }

        private void picRoll1_Click(object sender, EventArgs e)
        {

        }

        private void arbiString_Click(object sender, EventArgs e)
        {

        }

        private void lblOutput_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }
    }
}