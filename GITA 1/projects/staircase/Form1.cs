using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace staircase
{
    //Programmer: Aaron Yoon
    //Date 12/2/22
    //Project: Stair case simulation
    public partial class Form1 : Form
    {
        int totalSteps = 0;
        int ghostDoor = 0;
        int monsterDoor = 0;

        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        bool onOff = false;

        PictureBox[] berdman = new PictureBox[8];
        int berdMove = 0;
        int berdPos = 5;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            berdman[0] = picStair1;
            berdman[1] = picStair2;
            berdman[2] = picStair3;
            berdman[3] = picStair4;
            berdman[4] = picStair5;
            berdman[5] = picStair6;
            berdman[6] = picStair7;
            berdman[7] = picStair8;

            
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void move()
        {
            //int berdBeforePos = berdPos;
            berdMove = r.Next(-1, 2);

            if (berdMove != 0)
                berdman[berdPos].Image = null;



            if (berdMove == 1 && berdPos != 7)
            {
                berdPos += berdMove;
                moveUp();
                totalSteps++;
            }
            else if (berdMove == -1 && berdPos != 0)
            {
                berdPos += berdMove;
                moveDown();
                totalSteps++;
            }
        }

        private void moveUp()
        {
            if (berdPos < 7)
            {
                picDoorDown.Image = picDoorClosed.Image;
                picDoorUp.Image = picDoorClosed.Image;
                berdman[berdPos].Image = picBerdRight.Image;
                txtDebug.Text = berdPos.ToString();
            }
            else if (berdPos == 7)
            {
                picDoorUp.Image = picDoorGhost.Image;
                ghostDoor ++;
               
            }

        }

        private void moveDown()
        {
            if (berdPos > 0)
            {
                txtDebug.Text = berdPos.ToString();
                picDoorDown.Image = picDoorClosed.Image;
                picDoorUp.Image = picDoorClosed.Image;
                berdman[berdPos].Image = picBerdLeft.Image;
            }
             if (berdPos == 0)
            {
                picDoorDown.Image = picDoorMonster.Image;
                monsterDoor ++;
                
            }
        }

        private void btnStart_Click(object sender, EventArgs e)
        {
            move();
        }

        private void timer_Tick(object sender, EventArgs e)
        {
            move();
        }

        private void btnStats_Click(object sender, EventArgs e)
        {
            MessageBox.Show(
                "total Steps: " + totalSteps.ToString() + "\n"
                + "Times Ghost Door opened: " + ghostDoor.ToString() + "\n"
                + "Times Monster Door opened: " + monsterDoor.ToString()
                );
        }

        private void btnAuto_Click(object sender, EventArgs e)
        {
            if (timer.Enabled == false)
                timer.Enabled = true;
            else if (timer.Enabled == true)
                timer.Enabled = false;
        }
    }
}
