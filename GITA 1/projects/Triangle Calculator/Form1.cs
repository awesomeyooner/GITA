//Programmer: Aaron Yoon
//Date: 10/12/22
//Project: Triangle Checker

namespace Triangle_Calculator
{
    public partial class Form1 : Form
    {
        int trianglesTracked;

        int sideTracked;
        int scaleneTracked;
        int equilateralTracked;
        int isoscelesTracked;

        int angleTracked;
        int rightTracked;
        int obtuseTracked;
        int acuteTracked;
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

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            //declare your variables to make your life easier
            int length1 = int.Parse(txtLength1.Text);
            int length2 = int.Parse(txtLength2.Text);
            int length3 = int.Parse(txtLength3.Text);
            bool isTriangle;


            //make a list for your lengths to use Max and Min methods
            List<int> triLengths = new List<int>()
            {
                length1,
                length2,
                length3
            };

            //this assigns the sides values in in order of greatest to least
            int hypotenuse = triLengths.Max();
            int legBase1 = triLengths.Min();
            int legBase2 = ((int)(triLengths.Average() * 3 - legBase1 - hypotenuse));

            //output your text
            lblOutput.Text =
                "Hypotenuse: " + hypotenuse.ToString() + "\n"
                + "Base: " + legBase2.ToString() + "\n"
                + "Leg: " + legBase1.ToString() + "\n"
                + getTriangle(legBase1, legBase2, hypotenuse) + "\n"
                + trianglesTracked.ToString() + " triangles tracked" + "\n"
                + rightTracked.ToString() + " right triangles" + "\n"
                + (rightTracked * 100 / angleTracked).ToString() + " right percentage" + "\n"
                + obtuseTracked.ToString() + " obtuse triangles" + "\n"
                + ( obtuseTracked * 100 / angleTracked).ToString() + " obtuse percentage" + "\n"
                + acuteTracked.ToString() + " acute triangles" + "\n"
                + (acuteTracked * 100 / angleTracked).ToString() + " acute percentage" + "\n"
                + scaleneTracked.ToString() + " scalene triangles" + "\n"
                + (scaleneTracked * 100 / sideTracked).ToString() + " scalene percentage" + "\n"
                + isoscelesTracked.ToString() + " isosceles triangles" + "\n"
                + (isoscelesTracked* 100 / sideTracked).ToString() + " iscosceles percentage" + "\n"
                + equilateralTracked.ToString() + " equilateral triangles" + "\n"
                + (equilateralTracked * 100 / sideTracked).ToString() + " equilateral percentage";



        }

        public string getTriangle(int leg1, int leg2, int hyp)
        {
            //this methods gets what type of triangle it is or if it even is a triangle
            //it takes all sides as its args

            //string for what angle type it is
            string angle;
            //string for what side type it is
            string side;
            //bool for if it is a triangle
            bool isTriangle = false;

            //these if statements check what angle type it is
            if (Math.Pow(leg1, 2) + Math.Pow(leg2, 2) == Math.Pow(hyp, 2))
            {
                angleTracked += 1;
                rightTracked += 1;
                angle = "Right Triangle";
                isTriangle = true;
                trianglesTracked += 1;
            }

            else if (Math.Pow(leg1, 2) + Math.Pow(leg2, 2) < Math.Pow(hyp, 2) && leg1 + leg2 > hyp)
            {
                angleTracked += 1;
                obtuseTracked += 1;
                angle = "Obtuse Triangle";
                isTriangle = true;
                trianglesTracked += 1;
            }

            else if (Math.Pow(leg1, 2) + Math.Pow(leg2, 2) > Math.Pow(hyp, 2) && leg1 + leg2 > hyp) 
            {
                angleTracked += 1;
                acuteTracked += 1;
                angle = "Acute Triangle";
                isTriangle = true;
                trianglesTracked += 1;
            }

            else if (leg1 + leg2 <= hyp)
            {
                angle = "your triple cannot make a triangle!";
                isTriangle = false;
                MessageBox.Show("Hypotenuse is greater than both legs combined!",
                    "ERROR",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error
                    );
            }
            else
                angle = null;

            //these if statements checks what side type it is
            if (leg1 == leg2 && leg1 != hyp && isTriangle)
            {
                sideTracked += 1;
                isoscelesTracked += 1;
                side = "Isosceles ";
            }
            else if (leg1 == leg2 && leg1 == hyp && isTriangle)
            {
                sideTracked += 1;
                equilateralTracked += 1;
                side = "Equilateral ";
            }
            else if (isTriangle)
            {
                sideTracked += 1;
                scaleneTracked += 1;
                side = "Scalene ";
            }
            else
                side = "ERROR: ";
            //gives back what triangle it is
            return side + angle;
        }
        
        /*public string getSideTriangle(int leg1, int leg2, int hyp)
        {
            //this method returns what side type your triangle is
            if (leg1 == leg2 && leg1 != hyp)
                return "Isosceles ";
            else if (leg1 == leg2 && leg1 == hyp)
                return "Equilateral ";
            else
                return "Scalene ";
        }
        */
    }
}