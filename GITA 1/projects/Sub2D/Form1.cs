using System.Runtime.CompilerServices;
using System.Windows.Forms.VisualStyles;

namespace Sub2D
{
    //Programmer: Aaron Yoon
    //Date: 1/20/23
    //Project: Sub2d
    public partial class Form1 : Form
    {

        PictureBox[,] tank = new PictureBox[8, 3];
        System.Random rY = new System.Random((int)System.DateTime.Now.Ticks);
        System.Random rX = new System.Random((int)System.DateTime.Now.Ticks);

        System.Random sX = new System.Random((int)System.DateTime.Now.Ticks);
        System.Random sY = new System.Random((int)System.DateTime.Now.Ticks);

        Boolean hasCrashed = false;

        int pbXCoord = 3;
        int pbYCoord = 1;

        int sharkXCoord = 1;
        int sharkYCoord = 1;

        int escapeAttempsTop = 0;
        int escapeAttempsBottom = 0;
        int escapeAttempsLeft = 0;
        int escapeAttempsRight = 0;



        int crashes = 0;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            tank[0, 0] = pic00;
            tank[1, 0] = pic10;
            tank[2, 0] = pic20;
            tank[3, 0] = pic30;
            tank[4, 0] = pic40;
            tank[5, 0] = pic50;
            tank[6, 0] = pic60;
            tank[7, 0] = pic70;

            tank[0, 1] = pic01;
            tank[1, 1] = pic11;
            tank[2, 1] = pic21;
            tank[3, 1] = pic31;
            tank[4, 1] = pic41;
            tank[5, 1] = pic51;
            tank[6, 1] = pic61;
            tank[7, 1] = pic71;

            tank[0, 2] = pic02;
            tank[1, 2] = pic12;
            tank[2, 2] = pic22;
            tank[3, 2] = pic32;
            tank[4, 2] = pic42;
            tank[5, 2] = pic52;
            tank[6, 2] = pic62;
            tank[7, 2] = pic72;

            tank[pbXCoord, pbYCoord].Image = picSubLeft.Image;
            tank[sharkXCoord, sharkYCoord].Image = picShorkLeft.Image;

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void btnQuit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnMove_Click(object sender, EventArgs e)
        {
            //reset();
            moveSub();
            moveShark();
            checkCollision();
           
        }

        private void moveSub()
        {
            
            int xMod = rX.Next(-1, 2);
            int yMod = rY.Next(-1, 2);

            //oldPos.Text = pbXCoord.ToString() + "\n" + pbYCoord.ToString();


            if ((pbXCoord == 0 && xMod == -1) || (pbXCoord == 7 && xMod == 1))
            {
                xMod = 0;
            }


            if ((pbYCoord == 0 && yMod == -1) || (pbYCoord == 2 && yMod == 1))
            {
                yMod = 0;
            }
          
           
            if(yMod != 0 || xMod != 0)
                tank[pbXCoord, pbYCoord].Image = null;

            pbXCoord += xMod;
            pbYCoord += yMod;

            //currentPos.Text = pbXCoord.ToString() + "\n" + pbYCoord.ToString();


            if (xMod == -1)
            {
                tank[pbXCoord, pbYCoord].Image = picSubLeft.Image;
            }
            else if (xMod == 1)
                tank[pbXCoord, pbYCoord].Image = picSubRight.Image;
            else
                tank[pbXCoord, pbYCoord].Image = picSubRight.Image;

            if (pbXCoord == 0)
                escapeAttempsLeft++;
            if (pbXCoord == 7)
                escapeAttempsRight++;
            if(pbYCoord == 0)
                escapeAttempsBottom++;
            if(pbYCoord == 2)
                escapeAttempsTop++;

            subPos.Text = pbXCoord.ToString() + pbYCoord.ToString();
            checkCollision();
        }

        public void reset()
        {
           // if (hasCrashed)
            //{
                tank[0, 0].Image = null;
                tank[1, 0].Image = null;
                tank[2, 0].Image = null;
                tank[3, 0].Image = null;
                tank[4, 0].Image = null;
                tank[5, 0].Image = null;
                tank[6, 0].Image = null;
                tank[7, 0].Image = null;

                tank[0, 1].Image = null;
                tank[1, 1].Image = null;
                tank[2, 1].Image = null;
                tank[3, 1].Image = null;
                tank[4, 1].Image = null;
                tank[5, 1].Image = null;
                tank[6, 1].Image = null;
                tank[7, 1].Image = null;

                tank[0, 2].Image = null;
                tank[1, 2].Image = null;
                tank[2, 2].Image = null;
                tank[3, 2].Image = null;
                tank[4, 2].Image = null;
                tank[5, 2].Image = null;
                tank[6, 2].Image = null;
                tank[7, 2].Image = null;

                sharkXCoord = 0;
                sharkYCoord = 1;

                pbXCoord = 7;
                pbYCoord = 1;

                hasCrashed = false;

                tank[sharkXCoord, sharkYCoord].Image = picShorkRight.Image;
                tank[pbXCoord, pbYCoord].Image = picSubLeft.Image;
            //}
        }   
        public void moveShark()
        {
            int xMod = rX.Next(-1, 2);
            int yMod = rY.Next(-1, 2);

            //oldPos.Text = pbXCoord.ToString() + "\n" + pbYCoord.ToString();


            if ((sharkXCoord == 0 && xMod == -1) || (sharkXCoord == 7 && xMod == 1))
            {
                xMod = 0;
            }


            if ((sharkYCoord == 0 && yMod == -1) || (sharkYCoord == 2 && yMod == 1))
            {
                yMod = 0;
            }


            if (yMod != 0 || xMod != 0)
                tank[sharkXCoord, sharkYCoord].Image = null;

            sharkXCoord += xMod;
            sharkYCoord += yMod;

            //currentPos.Text = pbXCoord.ToString() + "\n" + pbYCoord.ToString();


            if (xMod == -1)
            {
                tank[sharkXCoord, sharkYCoord].Image = picShorkLeft.Image;
            }
            else if (xMod == 1)
                tank[sharkXCoord, sharkYCoord].Image = picShorkRight.Image;
            else
                tank[sharkXCoord, sharkYCoord].Image = picShorkRight.Image;

            sharkPos.Text = sharkXCoord.ToString() + sharkYCoord.ToString();
            checkCollision();
        }

        public void checkCollision()
        {
            if(sharkXCoord == pbXCoord && sharkYCoord == pbYCoord)
            {
                tank[sharkXCoord, sharkYCoord].Image = null;
                tank[sharkXCoord, 0].Image = picBoom.Image;
                crashes++;
                //sharkXCoord = 0;
                //sharkYCoord = 1;
                //pbXCoord = 7;
                //pbYCoord = 1;
                //MessageBox.Show("Game Over!");
                hasCrashed = true;
                timer1.Enabled = false;
            }
        }

        

        private void btnAutomate_Click(object sender, EventArgs e)
        {
            if (timer1.Enabled)
                timer1.Enabled = false;
            else if (!timer1.Enabled)
                timer1.Enabled = true;
        }

        private void txtInterval_TextChanged(object sender, EventArgs e)
        {
            try
            {
                timer1.Interval = int.Parse(txtInterval.Text);
            }

            catch 
            {
                MessageBox.Show("Please put an integer");
            }

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            //reset();
            moveSub();
            moveShark();
            checkCollision();
      
        }

        private void btnStats_Click(object sender, EventArgs e)
        {
            MessageBox.Show(
                "top bumps: " + escapeAttempsTop.ToString() + "\n" +
                "bottom bumps: " + escapeAttempsBottom.ToString() + "\n" +
                "left bumps: " + escapeAttempsLeft.ToString() + "\n" +
                "right bumps: " + escapeAttempsRight.ToString() + "\n" +
                "crashes: " + crashes.ToString()
                );
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            reset();
        }
    }
}