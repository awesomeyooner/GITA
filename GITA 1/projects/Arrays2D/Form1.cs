//Programmer: Aaron Yoob
//Project: lecture on 2 dimensional arrays
// 1/9/22
using System.CodeDom;

namespace Arrays2D
{
    public partial class Form1 : Form
    {
        //declare global variables
        //declare 2d array
        PictureBox[,] zoo = new PictureBox[3, 4];
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);
        int pbRow = 0;
        int pbCol = 0;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //runs code of startup
            //organize the zoo 
            zoo[0, 0] = picBox00;
            zoo[0, 1] = picBox01;
            zoo[0, 2] = picBox02;
            zoo[0, 3] = picBox03;

            //second row of zoo
            zoo[1, 0] = picBox10;
            zoo[1, 1] = picBox11;
            zoo[1, 2] = picBox12;
            zoo[1, 3] = picBox13;

            //third row of zoo;
            zoo[2, 0] = picBox20;
            zoo[2, 1] = picBox21;
            zoo[2, 2] = picBox22;
            zoo[2, 3] = picBox23;

            //randomly place in tank when first started
            pbRow = r.Next(0, 3);
            pbCol = r.Next(0, 4);
            zoo[pbRow, pbCol].Image = picPBear.Image;

        }

        private void btnMove_Click(object sender, EventArgs e)
        {
            movePic();
        }

        private void movePic()
        {
            zoo[pbRow, pbCol].Image = null;
            pbRow = r.Next(0, 3);
            pbCol = r.Next(0, 4);
            zoo[pbRow, pbCol].Image = picPBear.Image;
        }
    }
}