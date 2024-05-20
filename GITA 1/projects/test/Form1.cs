namespace test
{
    public partial class Form1 : Form
    {
        int yes = 0;
     
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < 11; i++)
            {
                yes += 1;
                label1.Text = yes.ToString();
            }    
        }
    }
}