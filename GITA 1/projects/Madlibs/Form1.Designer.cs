namespace Madlibs
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.txt_Story = new System.Windows.Forms.TextBox();
            this.txt_NOUN1 = new System.Windows.Forms.TextBox();
            this.buttonQUIT = new System.Windows.Forms.Button();
            this.buttonPUSH = new System.Windows.Forms.Button();
            this.txt_NOUN2 = new System.Windows.Forms.TextBox();
            this.txt_NOUN5 = new System.Windows.Forms.TextBox();
            this.txt_NOUN8 = new System.Windows.Forms.TextBox();
            this.txt_NOUN9 = new System.Windows.Forms.TextBox();
            this.txt_VERB3 = new System.Windows.Forms.TextBox();
            this.txt_VERB6 = new System.Windows.Forms.TextBox();
            this.txt_VERB10 = new System.Windows.Forms.TextBox();
            this.txt_ADJECTIVE7 = new System.Windows.Forms.TextBox();
            this.txt_ADJECTIVE4 = new System.Windows.Forms.TextBox();
            this.buttonRESET = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txt_Story
            // 
            this.txt_Story.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_Story.Location = new System.Drawing.Point(120, 12);
            this.txt_Story.Multiline = true;
            this.txt_Story.Name = "txt_Story";
            this.txt_Story.ReadOnly = true;
            this.txt_Story.Size = new System.Drawing.Size(552, 488);
            this.txt_Story.TabIndex = 1;
            this.txt_Story.Text = resources.GetString("txt_Story.Text");
            this.txt_Story.Visible = false;
            this.txt_Story.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // txt_NOUN1
            // 
            this.txt_NOUN1.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_NOUN1.ForeColor = System.Drawing.Color.Blue;
            this.txt_NOUN1.Location = new System.Drawing.Point(89, 12);
            this.txt_NOUN1.Name = "txt_NOUN1";
            this.txt_NOUN1.Size = new System.Drawing.Size(226, 34);
            this.txt_NOUN1.TabIndex = 2;
            this.txt_NOUN1.Text = "NOUN";
            this.txt_NOUN1.TextChanged += new System.EventHandler(this.txt_NOUN1_TextChanged);
            // 
            // buttonQUIT
            // 
            this.buttonQUIT.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.buttonQUIT.Location = new System.Drawing.Point(664, 12);
            this.buttonQUIT.Name = "buttonQUIT";
            this.buttonQUIT.Size = new System.Drawing.Size(124, 44);
            this.buttonQUIT.TabIndex = 3;
            this.buttonQUIT.Text = "QUIT";
            this.buttonQUIT.UseVisualStyleBackColor = true;
            this.buttonQUIT.Click += new System.EventHandler(this.buttonQUIT_Click);
            // 
            // buttonPUSH
            // 
            this.buttonPUSH.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.buttonPUSH.Location = new System.Drawing.Point(664, 62);
            this.buttonPUSH.Name = "buttonPUSH";
            this.buttonPUSH.Size = new System.Drawing.Size(124, 43);
            this.buttonPUSH.TabIndex = 4;
            this.buttonPUSH.Text = "PUSH";
            this.buttonPUSH.UseVisualStyleBackColor = true;
            this.buttonPUSH.Click += new System.EventHandler(this.buttonPUSH_Click);
            // 
            // txt_NOUN2
            // 
            this.txt_NOUN2.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_NOUN2.ForeColor = System.Drawing.Color.Blue;
            this.txt_NOUN2.Location = new System.Drawing.Point(89, 52);
            this.txt_NOUN2.Name = "txt_NOUN2";
            this.txt_NOUN2.Size = new System.Drawing.Size(226, 34);
            this.txt_NOUN2.TabIndex = 5;
            this.txt_NOUN2.Text = "NOUN";
            // 
            // txt_NOUN5
            // 
            this.txt_NOUN5.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_NOUN5.ForeColor = System.Drawing.Color.Blue;
            this.txt_NOUN5.Location = new System.Drawing.Point(89, 172);
            this.txt_NOUN5.Multiline = true;
            this.txt_NOUN5.Name = "txt_NOUN5";
            this.txt_NOUN5.Size = new System.Drawing.Size(226, 32);
            this.txt_NOUN5.TabIndex = 6;
            this.txt_NOUN5.Text = "NOUN";
            // 
            // txt_NOUN8
            // 
            this.txt_NOUN8.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_NOUN8.ForeColor = System.Drawing.Color.Blue;
            this.txt_NOUN8.Location = new System.Drawing.Point(89, 290);
            this.txt_NOUN8.Name = "txt_NOUN8";
            this.txt_NOUN8.Size = new System.Drawing.Size(226, 34);
            this.txt_NOUN8.TabIndex = 7;
            this.txt_NOUN8.Text = "NOUN";
            // 
            // txt_NOUN9
            // 
            this.txt_NOUN9.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_NOUN9.ForeColor = System.Drawing.Color.Blue;
            this.txt_NOUN9.Location = new System.Drawing.Point(89, 330);
            this.txt_NOUN9.Name = "txt_NOUN9";
            this.txt_NOUN9.Size = new System.Drawing.Size(226, 34);
            this.txt_NOUN9.TabIndex = 8;
            this.txt_NOUN9.Text = "NOUN";
            // 
            // txt_VERB3
            // 
            this.txt_VERB3.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_VERB3.ForeColor = System.Drawing.Color.Blue;
            this.txt_VERB3.Location = new System.Drawing.Point(89, 92);
            this.txt_VERB3.Name = "txt_VERB3";
            this.txt_VERB3.Size = new System.Drawing.Size(226, 34);
            this.txt_VERB3.TabIndex = 9;
            this.txt_VERB3.Text = "VERB";
            // 
            // txt_VERB6
            // 
            this.txt_VERB6.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_VERB6.ForeColor = System.Drawing.Color.Blue;
            this.txt_VERB6.Location = new System.Drawing.Point(89, 210);
            this.txt_VERB6.Name = "txt_VERB6";
            this.txt_VERB6.Size = new System.Drawing.Size(226, 34);
            this.txt_VERB6.TabIndex = 10;
            this.txt_VERB6.Text = "VERB";
            // 
            // txt_VERB10
            // 
            this.txt_VERB10.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_VERB10.ForeColor = System.Drawing.Color.Blue;
            this.txt_VERB10.Location = new System.Drawing.Point(89, 370);
            this.txt_VERB10.Name = "txt_VERB10";
            this.txt_VERB10.Size = new System.Drawing.Size(226, 34);
            this.txt_VERB10.TabIndex = 11;
            this.txt_VERB10.Text = "VERB";
            // 
            // txt_ADJECTIVE7
            // 
            this.txt_ADJECTIVE7.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_ADJECTIVE7.ForeColor = System.Drawing.Color.Blue;
            this.txt_ADJECTIVE7.Location = new System.Drawing.Point(89, 250);
            this.txt_ADJECTIVE7.Name = "txt_ADJECTIVE7";
            this.txt_ADJECTIVE7.Size = new System.Drawing.Size(226, 34);
            this.txt_ADJECTIVE7.TabIndex = 12;
            this.txt_ADJECTIVE7.Text = "ADJECTIVE";
            // 
            // txt_ADJECTIVE4
            // 
            this.txt_ADJECTIVE4.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txt_ADJECTIVE4.ForeColor = System.Drawing.Color.Blue;
            this.txt_ADJECTIVE4.Location = new System.Drawing.Point(89, 132);
            this.txt_ADJECTIVE4.Name = "txt_ADJECTIVE4";
            this.txt_ADJECTIVE4.Size = new System.Drawing.Size(226, 34);
            this.txt_ADJECTIVE4.TabIndex = 13;
            this.txt_ADJECTIVE4.Text = "ADJECTIVE";
            // 
            // buttonRESET
            // 
            this.buttonRESET.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.buttonRESET.Location = new System.Drawing.Point(664, 111);
            this.buttonRESET.Name = "buttonRESET";
            this.buttonRESET.Size = new System.Drawing.Size(124, 50);
            this.buttonRESET.TabIndex = 14;
            this.buttonRESET.Text = "RESET";
            this.buttonRESET.UseVisualStyleBackColor = true;
            this.buttonRESET.Click += new System.EventHandler(this.buttonRESET_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(12, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(71, 28);
            this.label1.TabIndex = 15;
            this.label1.Text = "NOUN\r\n";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(13, 52);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(71, 28);
            this.label2.TabIndex = 16;
            this.label2.Text = "NOUN\r\n";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(13, 92);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(57, 28);
            this.label3.TabIndex = 17;
            this.label3.Text = "VERB";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(12, 132);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(46, 28);
            this.label4.TabIndex = 18;
            this.label4.Text = "ADJ";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label5.Location = new System.Drawing.Point(8, 172);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(71, 28);
            this.label5.TabIndex = 19;
            this.label5.Text = "NOUN\r\n";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label6.Location = new System.Drawing.Point(8, 216);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(57, 28);
            this.label6.TabIndex = 20;
            this.label6.Text = "VERB";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label7.Location = new System.Drawing.Point(12, 253);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(46, 28);
            this.label7.TabIndex = 21;
            this.label7.Text = "ADJ";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label8.Location = new System.Drawing.Point(8, 290);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(71, 28);
            this.label8.TabIndex = 22;
            this.label8.Text = "NOUN\r\n";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label9.Location = new System.Drawing.Point(8, 330);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(71, 28);
            this.label9.TabIndex = 23;
            this.label9.Text = "NOUN\r\n";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label10.Location = new System.Drawing.Point(13, 373);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(57, 28);
            this.label10.TabIndex = 24;
            this.label10.Text = "VERB";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 529);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.buttonRESET);
            this.Controls.Add(this.txt_ADJECTIVE4);
            this.Controls.Add(this.txt_ADJECTIVE7);
            this.Controls.Add(this.txt_VERB10);
            this.Controls.Add(this.txt_VERB6);
            this.Controls.Add(this.txt_VERB3);
            this.Controls.Add(this.txt_NOUN9);
            this.Controls.Add(this.txt_NOUN8);
            this.Controls.Add(this.txt_NOUN5);
            this.Controls.Add(this.txt_NOUN2);
            this.Controls.Add(this.buttonPUSH);
            this.Controls.Add(this.buttonQUIT);
            this.Controls.Add(this.txt_NOUN1);
            this.Controls.Add(this.txt_Story);
            this.Name = "Form1";
            this.Text = "Madlib";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private TextBox txt_Story;
        private TextBox txt_NOUN1;
        private Button buttonQUIT;
        private Button buttonPUSH;
        private TextBox txt_NOUN2;
        private TextBox txt_NOUN5;
        private TextBox txt_NOUN8;
        private TextBox txt_NOUN9;
        private TextBox txt_VERB3;
        private TextBox txt_VERB6;
        private TextBox txt_VERB10;
        private TextBox txt_ADJECTIVE7;
        private TextBox txt_ADJECTIVE4;
        private Button buttonRESET;
        private Label label1;
        private Label label2;
        private Label label3;
        private Label label4;
        private Label label5;
        private Label label6;
        private Label label7;
        private Label label8;
        private Label label9;
        private Label label10;
    }
}