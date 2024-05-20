namespace rockPaperScissors
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
            this.btnChoose1 = new System.Windows.Forms.Button();
            this.picSpock = new System.Windows.Forms.PictureBox();
            this.grpBxHand1 = new System.Windows.Forms.GroupBox();
            this.radLizard1 = new System.Windows.Forms.RadioButton();
            this.radSpock1 = new System.Windows.Forms.RadioButton();
            this.radScissors1 = new System.Windows.Forms.RadioButton();
            this.radPaper1 = new System.Windows.Forms.RadioButton();
            this.radRock1 = new System.Windows.Forms.RadioButton();
            this.picLizard = new System.Windows.Forms.PictureBox();
            this.picPaper = new System.Windows.Forms.PictureBox();
            this.picScissors = new System.Windows.Forms.PictureBox();
            this.picRock = new System.Windows.Forms.PictureBox();
            this.picPlayer1 = new System.Windows.Forms.PictureBox();
            this.grpBxHand2 = new System.Windows.Forms.GroupBox();
            this.radLizard2 = new System.Windows.Forms.RadioButton();
            this.radSpock2 = new System.Windows.Forms.RadioButton();
            this.radScissors2 = new System.Windows.Forms.RadioButton();
            this.radPaper2 = new System.Windows.Forms.RadioButton();
            this.radRock2 = new System.Windows.Forms.RadioButton();
            this.picPlayer2 = new System.Windows.Forms.PictureBox();
            this.btnChoose2 = new System.Windows.Forms.Button();
            this.btnReveal = new System.Windows.Forms.Button();
            this.btnQuit = new System.Windows.Forms.Button();
            this.btnReset = new System.Windows.Forms.Button();
            this.btnStats = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.picSpock)).BeginInit();
            this.grpBxHand1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picLizard)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPaper)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picScissors)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picRock)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer1)).BeginInit();
            this.grpBxHand2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer2)).BeginInit();
            this.SuspendLayout();
            // 
            // btnChoose1
            // 
            this.btnChoose1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnChoose1.Location = new System.Drawing.Point(125, 750);
            this.btnChoose1.Name = "btnChoose1";
            this.btnChoose1.Size = new System.Drawing.Size(158, 53);
            this.btnChoose1.TabIndex = 0;
            this.btnChoose1.Text = "CHOOSE";
            this.btnChoose1.UseVisualStyleBackColor = true;
            this.btnChoose1.Click += new System.EventHandler(this.btnShoot_Click);
            // 
            // picSpock
            // 
            this.picSpock.Image = global::rockPaperScissors.Properties.Resources.spock;
            this.picSpock.Location = new System.Drawing.Point(1173, 251);
            this.picSpock.Name = "picSpock";
            this.picSpock.Size = new System.Drawing.Size(284, 181);
            this.picSpock.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSpock.TabIndex = 2;
            this.picSpock.TabStop = false;
            this.picSpock.Visible = false;
            // 
            // grpBxHand1
            // 
            this.grpBxHand1.Controls.Add(this.radLizard1);
            this.grpBxHand1.Controls.Add(this.radSpock1);
            this.grpBxHand1.Controls.Add(this.radScissors1);
            this.grpBxHand1.Controls.Add(this.radPaper1);
            this.grpBxHand1.Controls.Add(this.radRock1);
            this.grpBxHand1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.grpBxHand1.Location = new System.Drawing.Point(31, 81);
            this.grpBxHand1.Name = "grpBxHand1";
            this.grpBxHand1.Size = new System.Drawing.Size(437, 507);
            this.grpBxHand1.TabIndex = 3;
            this.grpBxHand1.TabStop = false;
            this.grpBxHand1.Text = "Player 1";
            this.grpBxHand1.Enter += new System.EventHandler(this.grpBxHand_Enter);
            // 
            // radLizard1
            // 
            this.radLizard1.AutoSize = true;
            this.radLizard1.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radLizard1.Location = new System.Drawing.Point(0, 411);
            this.radLizard1.Name = "radLizard1";
            this.radLizard1.Size = new System.Drawing.Size(147, 43);
            this.radLizard1.TabIndex = 4;
            this.radLizard1.TabStop = true;
            this.radLizard1.Text = "LIZARD";
            this.radLizard1.UseVisualStyleBackColor = true;
            this.radLizard1.CheckedChanged += new System.EventHandler(this.radLizard1_CheckedChanged);
            // 
            // radSpock1
            // 
            this.radSpock1.AutoSize = true;
            this.radSpock1.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radSpock1.Location = new System.Drawing.Point(0, 333);
            this.radSpock1.Name = "radSpock1";
            this.radSpock1.Size = new System.Drawing.Size(128, 43);
            this.radSpock1.TabIndex = 3;
            this.radSpock1.TabStop = true;
            this.radSpock1.Text = "SPOCK";
            this.radSpock1.UseVisualStyleBackColor = true;
            this.radSpock1.CheckedChanged += new System.EventHandler(this.radSpock1_CheckedChanged);
            // 
            // radScissors1
            // 
            this.radScissors1.AutoSize = true;
            this.radScissors1.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radScissors1.Location = new System.Drawing.Point(0, 249);
            this.radScissors1.Name = "radScissors1";
            this.radScissors1.Size = new System.Drawing.Size(186, 43);
            this.radScissors1.TabIndex = 2;
            this.radScissors1.TabStop = true;
            this.radScissors1.Text = "SCISSORS";
            this.radScissors1.UseVisualStyleBackColor = true;
            this.radScissors1.CheckedChanged += new System.EventHandler(this.radScissors1_CheckedChanged);
            // 
            // radPaper1
            // 
            this.radPaper1.AutoSize = true;
            this.radPaper1.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radPaper1.Location = new System.Drawing.Point(0, 180);
            this.radPaper1.Name = "radPaper1";
            this.radPaper1.Size = new System.Drawing.Size(124, 43);
            this.radPaper1.TabIndex = 1;
            this.radPaper1.TabStop = true;
            this.radPaper1.Text = "PAPER";
            this.radPaper1.UseVisualStyleBackColor = true;
            this.radPaper1.CheckedChanged += new System.EventHandler(this.radPaper1_CheckedChanged);
            // 
            // radRock1
            // 
            this.radRock1.AutoSize = true;
            this.radRock1.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radRock1.Location = new System.Drawing.Point(0, 111);
            this.radRock1.Name = "radRock1";
            this.radRock1.Size = new System.Drawing.Size(112, 43);
            this.radRock1.TabIndex = 0;
            this.radRock1.TabStop = true;
            this.radRock1.Text = "ROCK";
            this.radRock1.UseVisualStyleBackColor = true;
            this.radRock1.CheckedChanged += new System.EventHandler(this.radRock1_CheckedChanged);
            // 
            // picLizard
            // 
            this.picLizard.Image = global::rockPaperScissors.Properties.Resources.lizard;
            this.picLizard.Location = new System.Drawing.Point(1191, 428);
            this.picLizard.Name = "picLizard";
            this.picLizard.Size = new System.Drawing.Size(284, 248);
            this.picLizard.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picLizard.TabIndex = 4;
            this.picLizard.TabStop = false;
            this.picLizard.Visible = false;
            // 
            // picPaper
            // 
            this.picPaper.Image = global::rockPaperScissors.Properties.Resources.paper;
            this.picPaper.Location = new System.Drawing.Point(1247, 264);
            this.picPaper.Name = "picPaper";
            this.picPaper.Size = new System.Drawing.Size(284, 265);
            this.picPaper.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picPaper.TabIndex = 5;
            this.picPaper.TabStop = false;
            this.picPaper.Visible = false;
            // 
            // picScissors
            // 
            this.picScissors.Image = global::rockPaperScissors.Properties.Resources.scissors;
            this.picScissors.Location = new System.Drawing.Point(1173, 137);
            this.picScissors.Name = "picScissors";
            this.picScissors.Size = new System.Drawing.Size(293, 181);
            this.picScissors.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picScissors.TabIndex = 6;
            this.picScissors.TabStop = false;
            this.picScissors.Visible = false;
            // 
            // picRock
            // 
            this.picRock.Image = global::rockPaperScissors.Properties.Resources.rock;
            this.picRock.Location = new System.Drawing.Point(1169, 206);
            this.picRock.Name = "picRock";
            this.picRock.Size = new System.Drawing.Size(293, 181);
            this.picRock.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picRock.TabIndex = 7;
            this.picRock.TabStop = false;
            this.picRock.Visible = false;
            // 
            // picPlayer1
            // 
            this.picPlayer1.Location = new System.Drawing.Point(60, 552);
            this.picPlayer1.Name = "picPlayer1";
            this.picPlayer1.Size = new System.Drawing.Size(293, 181);
            this.picPlayer1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picPlayer1.TabIndex = 8;
            this.picPlayer1.TabStop = false;
            // 
            // grpBxHand2
            // 
            this.grpBxHand2.Controls.Add(this.radLizard2);
            this.grpBxHand2.Controls.Add(this.radSpock2);
            this.grpBxHand2.Controls.Add(this.radScissors2);
            this.grpBxHand2.Controls.Add(this.radPaper2);
            this.grpBxHand2.Controls.Add(this.radRock2);
            this.grpBxHand2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.grpBxHand2.Location = new System.Drawing.Point(541, 81);
            this.grpBxHand2.Name = "grpBxHand2";
            this.grpBxHand2.Size = new System.Drawing.Size(437, 507);
            this.grpBxHand2.TabIndex = 5;
            this.grpBxHand2.TabStop = false;
            this.grpBxHand2.Text = "Player 2";
            // 
            // radLizard2
            // 
            this.radLizard2.AutoSize = true;
            this.radLizard2.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radLizard2.Location = new System.Drawing.Point(0, 411);
            this.radLizard2.Name = "radLizard2";
            this.radLizard2.Size = new System.Drawing.Size(147, 43);
            this.radLizard2.TabIndex = 4;
            this.radLizard2.TabStop = true;
            this.radLizard2.Text = "LIZARD";
            this.radLizard2.UseVisualStyleBackColor = true;
            this.radLizard2.CheckedChanged += new System.EventHandler(this.radLizard2_CheckedChanged);
            // 
            // radSpock2
            // 
            this.radSpock2.AutoSize = true;
            this.radSpock2.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radSpock2.Location = new System.Drawing.Point(0, 333);
            this.radSpock2.Name = "radSpock2";
            this.radSpock2.Size = new System.Drawing.Size(128, 43);
            this.radSpock2.TabIndex = 3;
            this.radSpock2.TabStop = true;
            this.radSpock2.Text = "SPOCK";
            this.radSpock2.UseVisualStyleBackColor = true;
            this.radSpock2.CheckedChanged += new System.EventHandler(this.radSpock2_CheckedChanged);
            // 
            // radScissors2
            // 
            this.radScissors2.AutoSize = true;
            this.radScissors2.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radScissors2.Location = new System.Drawing.Point(0, 249);
            this.radScissors2.Name = "radScissors2";
            this.radScissors2.Size = new System.Drawing.Size(186, 43);
            this.radScissors2.TabIndex = 2;
            this.radScissors2.TabStop = true;
            this.radScissors2.Text = "SCISSORS";
            this.radScissors2.UseVisualStyleBackColor = true;
            this.radScissors2.CheckedChanged += new System.EventHandler(this.radScissors2_CheckedChanged);
            // 
            // radPaper2
            // 
            this.radPaper2.AutoSize = true;
            this.radPaper2.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radPaper2.Location = new System.Drawing.Point(0, 180);
            this.radPaper2.Name = "radPaper2";
            this.radPaper2.Size = new System.Drawing.Size(124, 43);
            this.radPaper2.TabIndex = 1;
            this.radPaper2.TabStop = true;
            this.radPaper2.Text = "PAPER";
            this.radPaper2.UseVisualStyleBackColor = true;
            this.radPaper2.CheckedChanged += new System.EventHandler(this.radPaper2_CheckedChanged);
            // 
            // radRock2
            // 
            this.radRock2.AutoSize = true;
            this.radRock2.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.radRock2.Location = new System.Drawing.Point(0, 111);
            this.radRock2.Name = "radRock2";
            this.radRock2.Size = new System.Drawing.Size(112, 43);
            this.radRock2.TabIndex = 0;
            this.radRock2.TabStop = true;
            this.radRock2.Text = "ROCK";
            this.radRock2.UseVisualStyleBackColor = true;
            this.radRock2.CheckedChanged += new System.EventHandler(this.radRock2_CheckedChanged);
            // 
            // picPlayer2
            // 
            this.picPlayer2.Location = new System.Drawing.Point(610, 552);
            this.picPlayer2.Name = "picPlayer2";
            this.picPlayer2.Size = new System.Drawing.Size(293, 181);
            this.picPlayer2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picPlayer2.TabIndex = 9;
            this.picPlayer2.TabStop = false;
            // 
            // btnChoose2
            // 
            this.btnChoose2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnChoose2.Location = new System.Drawing.Point(671, 739);
            this.btnChoose2.Name = "btnChoose2";
            this.btnChoose2.Size = new System.Drawing.Size(158, 53);
            this.btnChoose2.TabIndex = 10;
            this.btnChoose2.Text = "CHOOSE";
            this.btnChoose2.UseVisualStyleBackColor = true;
            this.btnChoose2.Click += new System.EventHandler(this.btnChoose2_Click);
            // 
            // btnReveal
            // 
            this.btnReveal.Enabled = false;
            this.btnReveal.Font = new System.Drawing.Font("Segoe UI", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnReveal.Location = new System.Drawing.Point(393, 739);
            this.btnReveal.Name = "btnReveal";
            this.btnReveal.Size = new System.Drawing.Size(208, 87);
            this.btnReveal.TabIndex = 11;
            this.btnReveal.Text = "REVEAL";
            this.btnReveal.UseVisualStyleBackColor = true;
            this.btnReveal.Click += new System.EventHandler(this.btnReveal_Click);
            // 
            // btnQuit
            // 
            this.btnQuit.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQuit.Location = new System.Drawing.Point(424, 12);
            this.btnQuit.Name = "btnQuit";
            this.btnQuit.Size = new System.Drawing.Size(127, 53);
            this.btnQuit.TabIndex = 1;
            this.btnQuit.Text = "QUIT";
            this.btnQuit.UseVisualStyleBackColor = true;
            this.btnQuit.Click += new System.EventHandler(this.btnQuit_Click);
            // 
            // btnReset
            // 
            this.btnReset.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnReset.Location = new System.Drawing.Point(584, 12);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(127, 53);
            this.btnReset.TabIndex = 12;
            this.btnReset.Text = "RESET";
            this.btnReset.UseVisualStyleBackColor = true;
            this.btnReset.Click += new System.EventHandler(this.btnReset_Click);
            // 
            // btnStats
            // 
            this.btnStats.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnStats.Location = new System.Drawing.Point(738, 12);
            this.btnStats.Name = "btnStats";
            this.btnStats.Size = new System.Drawing.Size(127, 53);
            this.btnStats.TabIndex = 13;
            this.btnStats.Text = "STATS";
            this.btnStats.UseVisualStyleBackColor = true;
            this.btnStats.Click += new System.EventHandler(this.btnStats_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1512, 1055);
            this.Controls.Add(this.btnStats);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.btnReveal);
            this.Controls.Add(this.btnChoose2);
            this.Controls.Add(this.picPlayer2);
            this.Controls.Add(this.grpBxHand2);
            this.Controls.Add(this.picPlayer1);
            this.Controls.Add(this.picRock);
            this.Controls.Add(this.picScissors);
            this.Controls.Add(this.picPaper);
            this.Controls.Add(this.picLizard);
            this.Controls.Add(this.grpBxHand1);
            this.Controls.Add(this.picSpock);
            this.Controls.Add(this.btnQuit);
            this.Controls.Add(this.btnChoose1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.picSpock)).EndInit();
            this.grpBxHand1.ResumeLayout(false);
            this.grpBxHand1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picLizard)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPaper)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picScissors)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picRock)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer1)).EndInit();
            this.grpBxHand2.ResumeLayout(false);
            this.grpBxHand2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer2)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Button btnChoose1;
        private PictureBox picSpock;
        private GroupBox grpBxHand1;
        private RadioButton radRock1;
        private RadioButton radScissors1;
        private RadioButton radPaper1;
        private PictureBox picLizard;
        private PictureBox picPaper;
        private PictureBox picScissors;
        private PictureBox picRock;
        private RadioButton radLizard1;
        private RadioButton radSpock1;
        private PictureBox picPlayer1;
        private GroupBox grpBxHand2;
        private RadioButton radLizard2;
        private RadioButton radSpock2;
        private RadioButton radScissors2;
        private RadioButton radPaper2;
        private RadioButton radRock2;
        private PictureBox picPlayer2;
        private Button btnChoose2;
        private Button btnReveal;
        private Button btnQuit;
        private Button btnReset;
        private Button btnStats;
    }
}