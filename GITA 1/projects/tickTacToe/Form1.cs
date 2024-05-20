namespace tickTacToe
{
    public partial class Form1 : Form
    {

        PictureBox[,] grid = new PictureBox[3, 3];

        int[,] XPlays = new int[3, 3];
        int[,] OPlays = new int[3, 3];

        int xWins = 0;
        int oWins = 0;
        int ties = 0;

        String turn = "X";

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            grid[0, 0] = pic00;
            grid[0, 1] = pic01;
            grid[0, 2] = pic02;
            grid[1, 0] = pic10;
            grid[1, 1] = pic11;
            grid[1, 2] = pic12;
            grid[2, 0] = pic20;
            grid[2, 1] = pic21;
            grid[2, 2] = pic22;
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            confirmation(0, 2);

        }

        private void pic12_Click(object sender, EventArgs e)
        {
            confirmation(1, 2);
        }

        private void pic00_Click(object sender, EventArgs e)
        {
            confirmation(0, 0);
        }

        public void confirmation(int x, int y)
        {
            DialogResult resultAnswer = new DialogResult();
            resultAnswer = MessageBox.Show("You sure?", "Confirm",
            MessageBoxButtons.YesNo);

            if (resultAnswer == DialogResult.Yes)
            {
                if (turn == "X")
                {
                    grid[x, y].Image = picX.Image;
                    grid[x, y].Enabled = false;
                    XPlays[x, y] = 1;
                    turn = "O";
                }
                else if (turn == "O")
                {
                    grid[x, y].Image = picCircle.Image;
                    grid[x, y].Enabled = false;
                    OPlays[x, y] = 1;
                    turn = "X";
                }

                checkWinner();
            }
        }
        //hello mr salesky this is your concious. if you like to eat burritos and salad bowls come to chipotle on march 1st and order 100 salad bowls for the mubotics fundraiser. this is not a request.
        public void checkWinner()
        {
            //  0 2 | 1 2 | 2 2
            //  ----|-----|-----
            //  0 1 | 1 1 | 2 1
            //  ----|-----|-----
            //  0 0 | 1 0 | 2 0

              

            for(int row = 0; row <= 2; row++)
            {
                int xHor = 0;
                int xVer = 0;

                int oHor = 0;
                int oVer = 0;

                for (int col = 0; col <= 2; col++)
                {
             
                    xHor += XPlays[row, col];

                    if(xHor == 3)
                    {
                        DialogResult resultAnswer = new DialogResult();
                        resultAnswer = MessageBox.Show("X wins Vertically", "winner winner",
                        MessageBoxButtons.OK);
                        
                        if(resultAnswer == DialogResult.OK) {
                            xWins += 1;
                            reset();
                        }
                    }

                    oHor += OPlays[row, col];

                    if (oHor == 3)
                    {
                        DialogResult resultAnswer = new DialogResult();
                        resultAnswer = MessageBox.Show("O wins Vertically", "winner winner",
                        MessageBoxButtons.OK);

                        if (resultAnswer == DialogResult.OK)
                        {
                            oWins += 1;
                            reset();
                        }
                    }

                    xVer += XPlays[col, row];
                     
                    if(xVer == 3)
                    {
                        DialogResult resultAnswer = new DialogResult();
                        resultAnswer = MessageBox.Show("X wins Horizontally", "winner winner",
                        MessageBoxButtons.OK);

                        if (resultAnswer == DialogResult.OK)
                        {
                            reset();
                            xWins += 1;
                        }
                    }

                    oVer += OPlays[col, row];

                    if (oVer == 3)
                    {
                        DialogResult resultAnswer = new DialogResult();
                        resultAnswer = MessageBox.Show("O wins Horizontally", "winner winner",
                        MessageBoxButtons.OK);

                        if (resultAnswer == DialogResult.OK)
                        {
                            reset();
                            oWins += 1;
                        }
                    }
                }
            }

            int xDiagSumPos = 0;
            int xDiagSumNeg = 0;

            int oDiagSumPos = 0;
            int oDiagSumNeg = 0;

            for (int diag = 0; diag <= 2; diag++)
            {

                int diagNeg = (diag * -1) + 2;

                xDiagSumPos += XPlays[diag, diag];
                xDiagSumNeg += XPlays[diag, diagNeg];

                //MessageBox.Show(diagSumPos.ToString());
                if(xDiagSumPos == 3)
                {
                    DialogResult resultAnswer = new DialogResult();
                    resultAnswer = MessageBox.Show("X wins Diagonally", "winner winner",
                    MessageBoxButtons.OK);
                    

                    if (resultAnswer == DialogResult.OK)
                    {
                        reset();
                        xWins += 1;
                    }
                }

                if(xDiagSumNeg == 3)
                {
                    DialogResult resultAnswer = new DialogResult();
                    resultAnswer = MessageBox.Show("X wins Diagonally", "winner winner",
                    MessageBoxButtons.OK);
                    

                    if (resultAnswer == DialogResult.OK)
                    {
                        reset();
                        xWins += 1;
                    }
                }

                oDiagSumPos += OPlays[diag, diag];
                oDiagSumNeg += OPlays[diag, diagNeg];

                //MessageBox.Show(diagSumPos.ToString());
                if (oDiagSumPos == 3)
                {
                    DialogResult resultAnswer = new DialogResult();
                    resultAnswer = MessageBox.Show("O wins Diagonally", "winner winner",
                    MessageBoxButtons.OK);
                    


                    if (resultAnswer == DialogResult.OK)
                    {
                        reset();
                        oWins += 1;
                    }
                }

                if (oDiagSumNeg == 3)
                {
                    DialogResult resultAnswer = new DialogResult();
                    resultAnswer = MessageBox.Show("O wins Diagonally", "winner winner",
                    MessageBoxButtons.OK);
                    

                    if (resultAnswer == DialogResult.OK)
                    {
                        reset();
                        oWins += 1;
                    }
                }
            }

            if(grid[0, 0].Image != null &&
            grid[0, 1].Image != null &&
            grid[0, 2].Image != null &&
            grid[1, 0].Image != null &&
            grid[1, 1].Image != null &&
            grid[1, 2].Image != null &&
            grid[2, 0].Image != null &&
            grid[2, 1].Image != null &&
            grid[2, 2].Image != null)
            {
                MessageBox.Show("No Winners!");
                ties += 1;
                reset();
            }


        }

        public void reset()
        {
            turn = "X";

            pic00.Image = null;
            pic01.Image = null;
            pic02.Image = null;
            pic10.Image = null;
            pic11.Image = null;
            pic12.Image = null;
            pic20.Image = null;
            pic21.Image = null;
            pic22.Image = null;


            XPlays[0, 0] = 0;
            XPlays[0, 1] = 0;
            XPlays[0, 2] = 0;
            XPlays[1, 0] = 0;
            XPlays[1, 1] = 0;
            XPlays[1, 2] = 0;
            XPlays[2, 0] = 0;
            XPlays[2, 1] = 0;
            XPlays[2, 2] = 0;

            OPlays[0, 0] = 0;
            OPlays[0, 1] = 0;
            OPlays[0, 2] = 0;
            OPlays[1, 0] = 0;
            OPlays[1, 1] = 0;
            OPlays[1, 2] = 0;
            OPlays[2, 0] = 0;
            OPlays[2, 1] = 0;
            OPlays[2, 2] = 0;

            grid[0, 0].Enabled = true;
            grid[0, 1].Enabled = true;
            grid[0, 2].Enabled = true;
            grid[1, 0].Enabled = true;
            grid[1, 1].Enabled = true;
            grid[1, 2].Enabled = true;
            grid[2, 0].Enabled = true;
            grid[2, 1].Enabled = true;
            grid[2, 2].Enabled = true;

        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            reset();
        }

        private void btnQuit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void pic10_Click(object sender, EventArgs e)
        {
            confirmation(1, 0);
        }

        private void pic20_Click(object sender, EventArgs e)
        {
            confirmation(2, 0);
        }

        private void pic01_Click(object sender, EventArgs e)
        {
            confirmation(0, 1);
        }

        private void pic11_Click(object sender, EventArgs e)
        {
            confirmation(1, 1);
        }

        private void pic21_Click(object sender, EventArgs e)
        {
            confirmation(2, 1);
        }

        private void pic22_Click(object sender, EventArgs e)
        {
            confirmation(2, 2);
        }

        private void btnStats_Click(object sender, EventArgs e)
        {
            MessageBox.Show(
                "X Wins " + xWins.ToString() + "\n" +
                "O Wins " + oWins.ToString() + "\n" +
                "Ties " + ties.ToString()
                );
        }
    }
}