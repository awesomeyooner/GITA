namespace Number_Array
{
    //Programmer: Aaron Yoon
    //Project: Number Array
    //Date 5/1/23
    public partial class Form1 : Form
    {

        int[] numberBank = new int[100];
        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);

        public Form1()
        {
            InitializeComponent();

            for(int i = 0; i < numberBank.Length; i++)
            {
                numberBank[i] = r.Next(0, 101);
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnAction_Click(object sender, EventArgs e)
        {
            int odds = 0;
            int evens = 0;
            int total = 0;
            int bufferHigh = 0;
            int bufferLow = 100;

            for(int i = 0; i < numberBank.Length; i++) 
            {
                if (numberBank[i] > bufferHigh)
                    bufferHigh = numberBank[i];

                if (numberBank[i] < bufferLow)
                    bufferLow = numberBank[i];
                    


                if (numberBank[i] % 2 == 0) //if number divided by 2 has no remainder count it as an even number
                    evens++;
                else //if the number divided by 2 has a remainder of not 0 then count it as an even number
                    odds++;

                total += i;
            }

            MessageBox.Show(
                "Odds: " + odds.ToString() + "\n" +
                "Evens: " + evens.ToString() + "\n" +
                "Average: " + (total / numberBank.Length).ToString() + "\n" +
                "Lowest: " + bufferLow.ToString() + "\n" +
                "Highest: " + bufferHigh.ToString() + "\n"
                );
        }

        private void btnRandom_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < numberBank.Length; i++)
            {
                numberBank[i] = r.Next(0, 101);
            }
        }
    }
}