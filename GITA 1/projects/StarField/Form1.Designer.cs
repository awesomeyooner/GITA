namespace StarField
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
            this.components = new System.ComponentModel.Container();
            this.star0 = new System.Windows.Forms.Label();
            this.star2 = new System.Windows.Forms.Label();
            this.star3 = new System.Windows.Forms.Label();
            this.star1 = new System.Windows.Forms.Label();
            this.star5 = new System.Windows.Forms.Label();
            this.star7 = new System.Windows.Forms.Label();
            this.star6 = new System.Windows.Forms.Label();
            this.star4 = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.timer2 = new System.Windows.Forms.Timer(this.components);
            this.SuspendLayout();
            // 
            // star0
            // 
            this.star0.BackColor = System.Drawing.Color.White;
            this.star0.Location = new System.Drawing.Point(365, 195);
            this.star0.Name = "star0";
            this.star0.Size = new System.Drawing.Size(10, 10);
            this.star0.TabIndex = 0;
            // 
            // star2
            // 
            this.star2.BackColor = System.Drawing.Color.White;
            this.star2.Location = new System.Drawing.Point(625, 182);
            this.star2.Name = "star2";
            this.star2.Size = new System.Drawing.Size(10, 10);
            this.star2.TabIndex = 1;
            // 
            // star3
            // 
            this.star3.BackColor = System.Drawing.Color.White;
            this.star3.Location = new System.Drawing.Point(785, 265);
            this.star3.Name = "star3";
            this.star3.Size = new System.Drawing.Size(10, 10);
            this.star3.TabIndex = 2;
            // 
            // star1
            // 
            this.star1.BackColor = System.Drawing.Color.White;
            this.star1.Location = new System.Drawing.Point(483, 182);
            this.star1.Name = "star1";
            this.star1.Size = new System.Drawing.Size(10, 10);
            this.star1.TabIndex = 3;
            // 
            // star5
            // 
            this.star5.BackColor = System.Drawing.Color.White;
            this.star5.Location = new System.Drawing.Point(462, 261);
            this.star5.Name = "star5";
            this.star5.Size = new System.Drawing.Size(10, 10);
            this.star5.TabIndex = 7;
            // 
            // star7
            // 
            this.star7.BackColor = System.Drawing.Color.White;
            this.star7.Location = new System.Drawing.Point(764, 344);
            this.star7.Name = "star7";
            this.star7.Size = new System.Drawing.Size(10, 10);
            this.star7.TabIndex = 6;
            // 
            // star6
            // 
            this.star6.BackColor = System.Drawing.Color.White;
            this.star6.Location = new System.Drawing.Point(604, 261);
            this.star6.Name = "star6";
            this.star6.Size = new System.Drawing.Size(10, 10);
            this.star6.TabIndex = 5;
            // 
            // star4
            // 
            this.star4.BackColor = System.Drawing.Color.White;
            this.star4.Location = new System.Drawing.Point(344, 274);
            this.star4.Name = "star4";
            this.star4.Size = new System.Drawing.Size(10, 10);
            this.star4.TabIndex = 4;
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Interval = 20;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.ClientSize = new System.Drawing.Size(1118, 614);
            this.Controls.Add(this.star5);
            this.Controls.Add(this.star7);
            this.Controls.Add(this.star6);
            this.Controls.Add(this.star4);
            this.Controls.Add(this.star1);
            this.Controls.Add(this.star3);
            this.Controls.Add(this.star2);
            this.Controls.Add(this.star0);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private Label star0;
        private Label star2;
        private Label star3;
        private Label star1;
        private Label star5;
        private Label star7;
        private Label star6;
        private Label star4;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Timer timer2;
    }
}