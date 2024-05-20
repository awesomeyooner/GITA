using System.Security.Cryptography.X509Certificates;

namespace rockPaperScissors
{
    public partial class Form1 : Form
    {
        //Programmer: Aaron Yoon
        //date 12/5/22
        //project rock paper scissors simulation


        int player1Wins = 0;
        int player2Wins = 0;
        int gamesPlayed = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            togglePlayer2();
        }

        private void btnShoot_Click(object sender, EventArgs e)
        {
            DialogResult resultAnswer = new DialogResult();

            resultAnswer = MessageBox.Show("You sure?", "dill pickle", MessageBoxButtons.YesNo);

            if(resultAnswer == DialogResult.Yes)
            {
                displayPics1();
                togglePlayer1();
                togglePlayer2();
            }
            
             


        }

        private void btnQuit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private string displayPics1()
        {
            //picPlayer1.Visible = true;
            if (radRock1.Checked)
            {
                picPlayer1.Image = picRock.Image;
                return "rock";
            }

            else if (radPaper1.Checked)
            {
                picPlayer1.Image = picPaper.Image;
                return "paper";
            }

            else if (radScissors1.Checked)
            {
                picPlayer1.Image = picScissors.Image;
                return "scissors";
            }

            else if (radSpock1.Checked)
            {
                picPlayer1.Image = picSpock.Image;
                return "spock";
            }

            else if (radLizard1.Checked)
            {
                picPlayer1.Image = picLizard.Image;
                return "lizard";
            }
            else
                return "how did we get here?";
           

        }

        private string displayPics2()
        {
            //picPlayer2.Visible = true;
            if (radRock2.Checked)
            {
                picPlayer2.Image = picRock.Image;
                return "rock";
            }

            else if (radPaper2.Checked)
            {
                picPlayer2.Image = picPaper.Image;
                return "paper";
            }

            else if (radScissors2.Checked)
            {
                picPlayer2.Image = picScissors.Image;
                return "scissors";
            }

            else if (radSpock2.Checked)
            {
                picPlayer2.Image = picSpock.Image;
                return "spock";
            }

            else if (radLizard2.Checked)
            {
                picPlayer2.Image = picLizard.Image;
                return "lizard";
            }
            else
                return "how did we get here?";
           

        }

        private void reset()
        {
            picPlayer1.Image = null;
            picPlayer2.Image = null;

            //grpBxHand2.Visible = true;
            //picPlayer2.Visible = true;
            //btnChoose2.Enabled = true;

            grpBxHand1.Visible = true;
            picPlayer1.Visible = true;
            btnChoose1.Enabled = true;

            btnReveal.Enabled = false;
        }

        private void grpBxHand_Enter(object sender, EventArgs e)
        {
            displayPics1();
        }

        private void togglePlayer1()
        {
            if(grpBxHand1.Visible == true)
            {
                grpBxHand1.Visible = false;
                picPlayer1.Visible = false;
                btnChoose1.Enabled= false;
            }
            else if(grpBxHand1.Visible == false)
            {
                grpBxHand1.Visible = true;
                picPlayer1.Visible = true;
                btnChoose1.Enabled = true;
            }
        }

        private void togglePlayer2()
        {
            if (grpBxHand2.Visible == true)
            {
                grpBxHand2.Visible = false;
                picPlayer2.Visible = false;
                btnChoose2.Enabled = false;
            }
            else if (grpBxHand2.Visible == false)
            {
                grpBxHand2.Visible = true;
                picPlayer2.Visible = true;
                btnChoose2.Enabled = true;
            }
        }

        private void btnChoose2_Click(object sender, EventArgs e)
        {
            DialogResult resultAnswer = new DialogResult();

            resultAnswer = MessageBox.Show("You sure?", "dill pickle", MessageBoxButtons.YesNo);

            if (resultAnswer == DialogResult.Yes)
            {
                displayPics2();
                togglePlayer2();
                btnReveal.Enabled = true;
                
            }
        }

        private void btnReveal_Click(object sender, EventArgs e)
        {
            picPlayer1.Visible = true;
            picPlayer2.Visible = true;
            gamesPlayed += 1;
            chooseWinner(displayPics1(), displayPics2());
        }

        private void chooseWinner(string choice1, string choice2)
        {
            string verdict = "";
            if (choice1 == choice2)
            {
                verdict = "Tie!";
            }
            else if (choice1 == "rock" && choice2 == "scissors")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "rock" && choice2 == "lizard")
            {
                verdict = "Player 1 Wins";
                player1Wins += 1;
            }
            else if (choice1 == "scissors" && choice2 == "lizard")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "scissors" && choice2 == "paper")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "lizard" && choice2 == "paper")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "lizard" && choice2 == "spock")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "paper" && choice2 == "spock")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "paper" && choice2 == "rock")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "spock" && choice2 == "scissors")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "spock" && choice2 == "scissors")
            {
                verdict = "Player 1 Wins!";
                player1Wins += 1;
            }
            else if (choice1 == "rock" && choice2 == "spock")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "rock" && choice2 == "paper")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "scissors" && choice2 == "spock")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "scissors" && choice2 == "rock")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "lizard" && choice2 == "scissors")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "lizard" && choice2 == "rock")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "paper" && choice2 == "lizard")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "paper" && choice2 == "scissors")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "spock" && choice2 == "paper")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else if (choice1 == "spock" && choice2 == "lizard")
            {
                verdict = "Player 2 Wins!";
                player2Wins += 1;
            }
            else
                verdict = "how did we get here?";

            MessageBox.Show(verdict);
                
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            reset();
        }

        private void btnStats_Click(object sender, EventArgs e)
        {
            MessageBox.Show(
                "player 1 wins: " + player1Wins.ToString() + "\n"
                + "player 2 wins: " + player2Wins.ToString() + "\n"
                + "total games: " + gamesPlayed.ToString());
        }

        private void radRock1_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer1.Image = picRock.Image;
        }

        private void radPaper1_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer1.Image = picPaper.Image;
        }

        private void radScissors1_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer1.Image = picScissors.Image;
        }

        private void radSpock1_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer1.Image = picSpock.Image;
        }

        private void radLizard1_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer1.Image = picLizard.Image;
        }

        private void radRock2_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer2.Image = picRock.Image;
        }

        private void radPaper2_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer2.Image = picPaper.Image;
        }

        private void radScissors2_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer2.Image = picScissors.Image;
        }

        private void radSpock2_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer2.Image = picSpock.Image;
        }

        private void radLizard2_CheckedChanged(object sender, EventArgs e)
        {
            picPlayer2.Image = picLizard.Image;
        }
    }
}