namespace Dice_Game
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
            this.btnQUIT = new System.Windows.Forms.Button();
            this.btnRoll = new System.Windows.Forms.Button();
            this.picRoll1 = new System.Windows.Forms.PictureBox();
            this.picRoll2 = new System.Windows.Forms.PictureBox();
            this.picDice1 = new System.Windows.Forms.PictureBox();
            this.picDice2 = new System.Windows.Forms.PictureBox();
            this.picDice3 = new System.Windows.Forms.PictureBox();
            this.picDice4 = new System.Windows.Forms.PictureBox();
            this.picDice5 = new System.Windows.Forms.PictureBox();
            this.picDice6 = new System.Windows.Forms.PictureBox();
            this.lblRoll1 = new System.Windows.Forms.Label();
            this.lblRoll2 = new System.Windows.Forms.Label();
            this.arbiString = new System.Windows.Forms.Label();
            this.lblNumRolled = new System.Windows.Forms.Label();
            this.lblStats = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.picRoll1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picRoll2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice6)).BeginInit();
            this.SuspendLayout();
            // 
            // btnQUIT
            // 
            this.btnQUIT.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQUIT.Location = new System.Drawing.Point(530, 12);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(143, 59);
            this.btnQUIT.TabIndex = 0;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = true;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // btnRoll
            // 
            this.btnRoll.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnRoll.Location = new System.Drawing.Point(265, 12);
            this.btnRoll.Name = "btnRoll";
            this.btnRoll.Size = new System.Drawing.Size(143, 59);
            this.btnRoll.TabIndex = 1;
            this.btnRoll.Text = "ROLL";
            this.btnRoll.UseVisualStyleBackColor = true;
            this.btnRoll.Click += new System.EventHandler(this.btnRoll_Click);
            // 
            // picRoll1
            // 
            this.picRoll1.Location = new System.Drawing.Point(50, 195);
            this.picRoll1.Name = "picRoll1";
            this.picRoll1.Size = new System.Drawing.Size(255, 255);
            this.picRoll1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picRoll1.TabIndex = 4;
            this.picRoll1.TabStop = false;
            this.picRoll1.Click += new System.EventHandler(this.picRoll1_Click);
            // 
            // picRoll2
            // 
            this.picRoll2.Location = new System.Drawing.Point(419, 195);
            this.picRoll2.Name = "picRoll2";
            this.picRoll2.Size = new System.Drawing.Size(255, 255);
            this.picRoll2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picRoll2.TabIndex = 5;
            this.picRoll2.TabStop = false;
            // 
            // picDice1
            // 
            this.picDice1.Image = global::Dice_Game.Properties.Resources.dice1;
            this.picDice1.Location = new System.Drawing.Point(956, 684);
            this.picDice1.Name = "picDice1";
            this.picDice1.Size = new System.Drawing.Size(255, 255);
            this.picDice1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice1.TabIndex = 6;
            this.picDice1.TabStop = false;
            this.picDice1.Visible = false;
            // 
            // picDice2
            // 
            this.picDice2.Image = global::Dice_Game.Properties.Resources.dice2;
            this.picDice2.Location = new System.Drawing.Point(809, 684);
            this.picDice2.Name = "picDice2";
            this.picDice2.Size = new System.Drawing.Size(255, 255);
            this.picDice2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice2.TabIndex = 7;
            this.picDice2.TabStop = false;
            this.picDice2.Visible = false;
            // 
            // picDice3
            // 
            this.picDice3.Image = global::Dice_Game.Properties.Resources.dice3;
            this.picDice3.Location = new System.Drawing.Point(695, 684);
            this.picDice3.Name = "picDice3";
            this.picDice3.Size = new System.Drawing.Size(255, 255);
            this.picDice3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice3.TabIndex = 8;
            this.picDice3.TabStop = false;
            this.picDice3.Visible = false;
            // 
            // picDice4
            // 
            this.picDice4.Image = global::Dice_Game.Properties.Resources.dice4;
            this.picDice4.Location = new System.Drawing.Point(632, 684);
            this.picDice4.Name = "picDice4";
            this.picDice4.Size = new System.Drawing.Size(255, 255);
            this.picDice4.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice4.TabIndex = 9;
            this.picDice4.TabStop = false;
            this.picDice4.Visible = false;
            // 
            // picDice5
            // 
            this.picDice5.Image = global::Dice_Game.Properties.Resources.dice5;
            this.picDice5.Location = new System.Drawing.Point(558, 684);
            this.picDice5.Name = "picDice5";
            this.picDice5.Size = new System.Drawing.Size(255, 255);
            this.picDice5.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice5.TabIndex = 10;
            this.picDice5.TabStop = false;
            this.picDice5.Visible = false;
            // 
            // picDice6
            // 
            this.picDice6.Image = global::Dice_Game.Properties.Resources.dice6;
            this.picDice6.Location = new System.Drawing.Point(477, 684);
            this.picDice6.Name = "picDice6";
            this.picDice6.Size = new System.Drawing.Size(255, 255);
            this.picDice6.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picDice6.TabIndex = 11;
            this.picDice6.TabStop = false;
            this.picDice6.Visible = false;
            // 
            // lblRoll1
            // 
            this.lblRoll1.AutoSize = true;
            this.lblRoll1.Font = new System.Drawing.Font("Segoe UI", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblRoll1.Location = new System.Drawing.Point(188, 138);
            this.lblRoll1.Name = "lblRoll1";
            this.lblRoll1.Size = new System.Drawing.Size(0, 54);
            this.lblRoll1.TabIndex = 12;
            // 
            // lblRoll2
            // 
            this.lblRoll2.AutoSize = true;
            this.lblRoll2.Font = new System.Drawing.Font("Segoe UI", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblRoll2.Location = new System.Drawing.Point(442, 138);
            this.lblRoll2.Name = "lblRoll2";
            this.lblRoll2.Size = new System.Drawing.Size(0, 54);
            this.lblRoll2.TabIndex = 13;
            // 
            // arbiString
            // 
            this.arbiString.AutoSize = true;
            this.arbiString.Font = new System.Drawing.Font("Segoe UI", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.arbiString.Location = new System.Drawing.Point(297, 518);
            this.arbiString.Name = "arbiString";
            this.arbiString.Size = new System.Drawing.Size(260, 54);
            this.arbiString.TabIndex = 14;
            this.arbiString.Text = "You Rolled a: ";
            this.arbiString.Visible = false;
            this.arbiString.Click += new System.EventHandler(this.arbiString_Click);
            // 
            // lblNumRolled
            // 
            this.lblNumRolled.AutoSize = true;
            this.lblNumRolled.Font = new System.Drawing.Font("Segoe UI", 72F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblNumRolled.Location = new System.Drawing.Point(577, 468);
            this.lblNumRolled.Name = "lblNumRolled";
            this.lblNumRolled.Size = new System.Drawing.Size(0, 159);
            this.lblNumRolled.TabIndex = 15;
            this.lblNumRolled.Visible = false;
            // 
            // lblStats
            // 
            this.lblStats.AutoSize = true;
            this.lblStats.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblStats.Location = new System.Drawing.Point(743, 9);
            this.lblStats.Name = "lblStats";
            this.lblStats.Size = new System.Drawing.Size(0, 38);
            this.lblStats.TabIndex = 16;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1322, 934);
            this.Controls.Add(this.lblStats);
            this.Controls.Add(this.lblNumRolled);
            this.Controls.Add(this.arbiString);
            this.Controls.Add(this.lblRoll2);
            this.Controls.Add(this.lblRoll1);
            this.Controls.Add(this.picDice6);
            this.Controls.Add(this.picDice5);
            this.Controls.Add(this.picDice4);
            this.Controls.Add(this.picDice3);
            this.Controls.Add(this.picDice2);
            this.Controls.Add(this.picDice1);
            this.Controls.Add(this.picRoll2);
            this.Controls.Add(this.picRoll1);
            this.Controls.Add(this.btnRoll);
            this.Controls.Add(this.btnQUIT);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.picRoll1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picRoll2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDice6)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnQUIT;
        private Button btnRoll;
        private PictureBox picRoll1;
        private PictureBox picRoll2;
        private PictureBox picDice1;
        private PictureBox picDice2;
        private PictureBox picDice3;
        private PictureBox picDice4;
        private PictureBox picDice5;
        private PictureBox picDice6;
        private Label lblRoll1;
        private Label lblRoll2;
        private Label arbiString;
        private Label lblNumRolled;
        private Label lblStats;
    }
}