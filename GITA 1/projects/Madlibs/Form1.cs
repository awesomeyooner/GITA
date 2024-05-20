//Programmer: Aaron Yoon
//Date: 9/8/22
//Project: Madlibs

namespace Madlibs
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

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void buttonQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void buttonPUSH_Click(object sender, EventArgs e)
        {
            txt_Story.Visible = true;
            txt_Story.Text = "Queen Elizabeth was cooking " + txt_NOUN1.Text +
            " , then suddenly " + txt_NOUN2.Text +
                " , came in the room and " + txt_VERB3.Text +
                "  aggressively. A(n) " + txt_ADJECTIVE4.Text +
                "  " + txt_NOUN5.Text +
                "  was randomly " + txt_VERB6.Text + 
                "  when this happened, but the Queen's cooking was so good that it had to come and get taste some. After the " + txt_NOUN5.Text + 
                " came in, their " + txt_VERB3.Text +
                " was so aggressive that it broke the entire appartment complex that the Queen was staying at. Though, thankfully the " + txt_NOUN1.Text +
                " remained untouched. The " + txt_NOUN5.Text + 
                " came back and tried to taste some of the " + txt_NOUN1.Text + 
                " but it was so " + txt_ADJECTIVE7.Text + 
                "  that it reconstructed the " + txt_NOUN5.Text +
                "'s atoms and formed solid gold. A " + txt_NOUN8.Text +
                "  walking and saw the gold, so gathered a team of " + txt_NOUN9.Text + "s" +
                "  to try and steal the gold. Later that day, the " + txt_NOUN8.Text + 
                " got the team of " + txt_NOUN9.Text +
                " and secretly entered the building. They got past security because they " + txt_VERB10.Text +
                " . Once they entered the room, they instantly went for the gold, though it was a trap, and they all died.\r\n  \r\n\r\n";

            label1.Visible = false;
            label2.Visible = false;
            label3.Visible = false;
            label4.Visible = false;
            label5.Visible = false;
            label6.Visible = false;
            label7.Visible = false;
            label8.Visible = false;
            label9.Visible = false;
            label10.Visible = false;

            txt_NOUN1.Visible = false;
            txt_NOUN2.Visible = false;
            txt_VERB3.Visible = false;
            txt_ADJECTIVE4.Visible = false;
            txt_NOUN5.Visible = false;
            txt_VERB6.Visible = false;
            txt_ADJECTIVE7.Visible = false;
            txt_NOUN8.Visible = false;
            txt_NOUN9.Visible = false;
            txt_VERB10.Visible = false;

        }

        private void buttonRESET_Click(object sender, EventArgs e)
        {
            txt_NOUN1.Text = "NOUN";
            txt_NOUN2.Text = "NOUN";
            txt_VERB3.Text = "VERB";
            txt_ADJECTIVE4.Text = "ADJECTIVE";
            txt_NOUN5.Text = "NOUN";
            txt_VERB6.Text = "VERB";
            txt_ADJECTIVE7.Text = "ADJECTIVE";
            txt_NOUN8.Text = "NOUN";
            txt_NOUN9.Text = "NOUN";
            txt_VERB10.Text = "VERB";

            txt_Story.Text = "Queen Elizabeth was cooking NOUN , then suddenly NOUN , came in the room and VERB  aggressively. A(n) ADJECTIVE  NOUN  was randomly VERB  when this happened, but the Queen's cooking was so good that it had to come and get taste some. After the (noun from before) came in, their (verb from before) was so aggressive that it broke the entire appartment complex that the Queen was staying at. Though, thankfully the (thing cooked) remained untouched. The (noun from before) came back and tried to taste some of the (thing cooked) but it was so ADJECTIVE  that it reconstructed the space (noun from before)'s atoms and formed solid gold. A NOUN walking and saw the gold, so gathered a team of NOUNs to try and steal the gold. Later that day, the (noun from before) got the team of (noun from before) and secretly entered the building. They got past security because they VERB . Once they entered the room, they instantly went for the gold, though it was a trap, and they all died.\r\n  \r\n\r\n";
            txt_Story.Visible = false;

            label1.Visible = !false;
            label2.Visible = !false;
            label3.Visible = !false;
            label4.Visible = !false;
            label5.Visible = !false;
            label6.Visible = !false;
            label7.Visible = !false;
            label8.Visible = !false;
            label9.Visible = !false;
            label10.Visible = !false;

            txt_NOUN1.Visible = !false;
            txt_NOUN2.Visible = !false;
            txt_VERB3.Visible = !false;
            txt_ADJECTIVE4.Visible = !false;
            txt_NOUN5.Visible = !false;
            txt_VERB6.Visible = !false;
            txt_ADJECTIVE7.Visible = !false;
            txt_NOUN8.Visible = !false;
            txt_NOUN9.Visible = !false;
            txt_VERB10.Visible = !false;
        }

        private void txt_NOUN1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}