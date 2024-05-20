//Programmer: Aaron Yoon
//Date: 9/30/22
//Project: Dice Rolling Simulator

using System.ComponentModel;

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

            totalRolls += 1;
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

            setNumRolled(numRolled);

            prob2 = rolled2 / totalRolls * 100;
            prob3 = rolled3 / totalRolls * 100;
            prob4 = rolled4 / totalRolls * 100;
            prob5 = rolled5 / totalRolls * 100;
            prob6 = rolled6 / totalRolls * 100;
            prob7 = rolled7 / totalRolls * 100;
            prob8 = rolled8 / totalRolls * 100;
            prob9 = rolled9 / totalRolls * 100;
            prob10 = rolled10 / totalRolls * 100;
            prob11 = rolled11 / totalRolls * 100;
            prob12 = rolled12 / totalRolls * 100;

            lblStats.Text =
                totalRolls.ToString() + "\n"
                + "Rolled 2: " + rolled2.ToString() + "\n"
                + "Probability of Rolling 2: " + prob2.ToString("F") + "\n"
                + "Rolled 3: " + rolled3.ToString() + "\n"
                + "Probability of Rolling 3: " + prob3.ToString("F") + "\n"
                + "Rolled 4: " + rolled4.ToString() + "\n"
                + "Probability of Rolling 4: " + prob4.ToString("F") + "\n"
                + "Rolled 5: " + rolled5.ToString() + "\n"
                + "Probability of Rolling 5: " + prob5.ToString("F") + "\n"
                + "Rolled 6: " + rolled6.ToString() + "\n"
                + "Probability of Rolling 6: " + prob6.ToString("F") + "\n"
                + "Rolled 7: " + rolled7.ToString() + "\n"
                + "Probability of Rolling 7: " + prob7.ToString("F") + "\n"
                + "Rolled 8: " + rolled8.ToString() + "\n"
                + "Probability of Rolling 8: " + prob8.ToString("F") + "\n"
                + "Rolled 9: " + rolled9.ToString() + "\n"
                + "Probability of Rolling 9: " + prob9.ToString("F") + "\n"
                + "Rolled 10: " + rolled10.ToString() + "\n"
                + "Probability of Rolling 10: " + prob10.ToString("F") + "\n"
                + "Rolled 11: " + rolled11.ToString() + "\n"
                + "Probability of Rolling 11: " + prob11.ToString("F") + "\n"
                + "Rolled 12: " + rolled12.ToString() + "\n"
                + "Probability of Rolling 12: " + prob12.ToString("F") + "\n";
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

        private void picRoll1_Click(object sender, EventArgs e)
        {

        }

        private void arbiString_Click(object sender, EventArgs e)
        {

        }
    }
}