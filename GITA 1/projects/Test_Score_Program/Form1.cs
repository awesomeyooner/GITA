//Programmer: Aaron Yoon
//Date: 9/28/22
//Project: calculate test scores
namespace Test_Score_Program
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            //quit the program
            this.Close();
        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            try
            {
                //make the variables for each test score to make life easier
                int testScore1 = int.Parse(txtTestOne.Text);
                int testScore2 = int.Parse(txtTestTwo.Text);
                double avgScore = (testScore1 + testScore2) / 2;
                string gradeCoef1 = null;
                string gradeCoef2 = null;
                string betterScore = null;

                //rounds to get the different of the letter grade
                int gradeFactor1 = testScore1 - round(testScore1);
                int gradeFactor2 = testScore2 - round(testScore2);
                string letterGrade1;
                string letterGrade2;

                //get the letter grade symbol for grade 1
                if (gradeFactor1 <= 3 && gradeFactor1 >= 0 && testScore1 != 100)
                    gradeCoef1 = "-";
                else if (gradeFactor1 > 3 && gradeFactor1 < 7)
                    gradeCoef1 = null;
                else if (gradeFactor1 >= 7 || testScore1 == 100)
                    gradeCoef1 = "+";

                //get the letter grade symbol for grade 2
                if (gradeFactor2 <= 3 && gradeFactor1 >= 0 && testScore2 != 100)
                    gradeCoef2 = "-";
                else if (gradeFactor2 > 3 && gradeFactor2 < 7)
                    gradeCoef2 = null;
                else if (gradeFactor2 >= 7 || testScore2 == 100)
                    gradeCoef2 = "+";


                //get the letter grade for grade 1
                if (testScore1 >= 90)
                    letterGrade1 = "A";
                else if (testScore1 >= 80 && testScore1 < 90)
                    letterGrade1 = "B";
                else if (testScore1 >= 70 && testScore1 < 80)
                    letterGrade1 = "C";
                else if (testScore1 >= 60 && testScore1 < 70)
                    letterGrade1 = "D";
                else
                    letterGrade1 = "F";

                //get the letter grade for grade 2
                if (testScore2 >= 90)
                    letterGrade2 = "A";
                else if (testScore2 >= 80 && testScore2 < 90)
                    letterGrade2 = "B";
                else if (testScore2 >= 70 && testScore2 < 80)
                    letterGrade2 = "C";
                else if (testScore2 >= 60 && testScore2 < 70)
                    letterGrade2 = "D";
                else
                    letterGrade2 = "F";


                if (testScore1 > testScore2)
                    betterScore = "Test 1 scored higher than Test 2!";
                else if (testScore1 < testScore2)
                    betterScore = "Test 2 scored higher than Test 1!";
                else if (testScore1 == testScore2)
                    betterScore = "Both Tests scored the same!";


                //make the output label visible and put text in it
                lblOutput.Visible = true;
                lblOutput.Text = "Test Score 1: " + gradeCoef1 + letterGrade1 + "\n"
                    + "Test Score 2: " + gradeCoef2 + letterGrade2 + "\n"
                    + betterScore + "\n"
                    + "Average Score is: " + avgScore;
            }
            catch
            {
                MessageBox.Show("Please enter a valid test Score",
                    "MISSING DATA!",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Warning
                    );
            }
          

            
        }

        private int round(double score)
        {
            //rounds the score to the nearest 2nd digit
            int roundedScore = Convert.ToInt32(Math.Floor(score / 10));
            return Math.Abs(roundedScore * 10);
        }

        private void btnCLEAR_Click(object sender, EventArgs e)
        {
            txtTestOne.Text = null;
            txtTestTwo.Text = null;
            lblOutput.Visible = false;
        }
    }
}