namespace Radio_Buttons
{
    partial class radio_button
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.radOther = new System.Windows.Forms.RadioButton();
            this.radPenguin = new System.Windows.Forms.RadioButton();
            this.radPolarBear = new System.Windows.Forms.RadioButton();
            this.chkShampoo = new System.Windows.Forms.CheckBox();
            this.chkShots = new System.Windows.Forms.CheckBox();
            this.chkGroom = new System.Windows.Forms.CheckBox();
            this.btnOK = new System.Windows.Forms.Button();
            this.btnQUIT = new System.Windows.Forms.Button();
            this.picPenguin = new System.Windows.Forms.PictureBox();
            this.picBlank = new System.Windows.Forms.PictureBox();
            this.picPolarBear = new System.Windows.Forms.PictureBox();
            this.btnRandom = new System.Windows.Forms.Button();
            this.lblRandom = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picPenguin)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBlank)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPolarBear)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(251, 45);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(263, 32);
            this.label1.TabIndex = 0;
            this.label1.Text = "Welcome to Pet Vet";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.radOther);
            this.groupBox1.Controls.Add(this.radPenguin);
            this.groupBox1.Controls.Add(this.radPolarBear);
            this.groupBox1.Location = new System.Drawing.Point(20, 176);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(167, 131);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Animal";
            // 
            // radOther
            // 
            this.radOther.AutoSize = true;
            this.radOther.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radOther.Location = new System.Drawing.Point(51, 85);
            this.radOther.Name = "radOther";
            this.radOther.Size = new System.Drawing.Size(77, 29);
            this.radOther.TabIndex = 4;
            this.radOther.TabStop = true;
            this.radOther.Text = "other";
            this.radOther.UseVisualStyleBackColor = true;
            this.radOther.CheckedChanged += new System.EventHandler(this.radOther_CheckedChanged);
            // 
            // radPenguin
            // 
            this.radPenguin.AutoSize = true;
            this.radPenguin.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radPenguin.Location = new System.Drawing.Point(51, 59);
            this.radPenguin.Name = "radPenguin";
            this.radPenguin.Size = new System.Drawing.Size(105, 29);
            this.radPenguin.TabIndex = 3;
            this.radPenguin.TabStop = true;
            this.radPenguin.Text = "Penguin";
            this.radPenguin.UseVisualStyleBackColor = true;
            this.radPenguin.CheckedChanged += new System.EventHandler(this.radPenguin_CheckedChanged);
            // 
            // radPolarBear
            // 
            this.radPolarBear.AutoSize = true;
            this.radPolarBear.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.radPolarBear.Location = new System.Drawing.Point(51, 32);
            this.radPolarBear.Name = "radPolarBear";
            this.radPolarBear.Size = new System.Drawing.Size(92, 29);
            this.radPolarBear.TabIndex = 2;
            this.radPolarBear.TabStop = true;
            this.radPolarBear.Text = "P-bear";
            this.radPolarBear.UseVisualStyleBackColor = true;
            this.radPolarBear.CheckedChanged += new System.EventHandler(this.radPolarBear_CheckedChanged);
            // 
            // chkShampoo
            // 
            this.chkShampoo.AutoSize = true;
            this.chkShampoo.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkShampoo.Location = new System.Drawing.Point(210, 98);
            this.chkShampoo.Name = "chkShampoo";
            this.chkShampoo.Size = new System.Drawing.Size(119, 29);
            this.chkShampoo.TabIndex = 2;
            this.chkShampoo.Text = "Shampoo";
            this.chkShampoo.UseVisualStyleBackColor = true;
            // 
            // chkShots
            // 
            this.chkShots.AutoSize = true;
            this.chkShots.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkShots.Location = new System.Drawing.Point(210, 133);
            this.chkShots.Name = "chkShots";
            this.chkShots.Size = new System.Drawing.Size(85, 29);
            this.chkShots.TabIndex = 3;
            this.chkShots.Text = "Shots";
            this.chkShots.UseVisualStyleBackColor = true;
            // 
            // chkGroom
            // 
            this.chkGroom.AutoSize = true;
            this.chkGroom.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkGroom.Location = new System.Drawing.Point(210, 168);
            this.chkGroom.Name = "chkGroom";
            this.chkGroom.Size = new System.Drawing.Size(119, 29);
            this.chkGroom.TabIndex = 4;
            this.chkGroom.Text = "Grooming";
            this.chkGroom.UseVisualStyleBackColor = true;
            // 
            // btnOK
            // 
            this.btnOK.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnOK.Location = new System.Drawing.Point(56, 98);
            this.btnOK.Name = "btnOK";
            this.btnOK.Size = new System.Drawing.Size(92, 46);
            this.btnOK.TabIndex = 5;
            this.btnOK.Text = "OK";
            this.btnOK.UseVisualStyleBackColor = true;
            this.btnOK.Click += new System.EventHandler(this.btnOK_Click);
            // 
            // btnQUIT
            // 
            this.btnQUIT.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnQUIT.Location = new System.Drawing.Point(668, 32);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(108, 45);
            this.btnQUIT.TabIndex = 6;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = true;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // picPenguin
            // 
            this.picPenguin.Image = global::Radio_Buttons.Properties.Resources.misha_penguin;
            this.picPenguin.Location = new System.Drawing.Point(223, 308);
            this.picPenguin.Name = "picPenguin";
            this.picPenguin.Size = new System.Drawing.Size(137, 141);
            this.picPenguin.SizeMode = System.Windows.Forms.PictureBoxSizeMode.CenterImage;
            this.picPenguin.TabIndex = 9;
            this.picPenguin.TabStop = false;
            // 
            // picBlank
            // 
            this.picBlank.Location = new System.Drawing.Point(405, 92);
            this.picBlank.Name = "picBlank";
            this.picBlank.Size = new System.Drawing.Size(358, 346);
            this.picBlank.SizeMode = System.Windows.Forms.PictureBoxSizeMode.CenterImage;
            this.picBlank.TabIndex = 8;
            this.picBlank.TabStop = false;
            // 
            // picPolarBear
            // 
            this.picPolarBear.Image = global::Radio_Buttons.Properties.Resources.polar_bear_bucket;
            this.picPolarBear.Location = new System.Drawing.Point(46, 315);
            this.picPolarBear.Name = "picPolarBear";
            this.picPolarBear.Size = new System.Drawing.Size(150, 123);
            this.picPolarBear.SizeMode = System.Windows.Forms.PictureBoxSizeMode.CenterImage;
            this.picPolarBear.TabIndex = 7;
            this.picPolarBear.TabStop = false;
            // 
            // btnRandom
            // 
            this.btnRandom.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnRandom.Location = new System.Drawing.Point(56, 555);
            this.btnRandom.Name = "btnRandom";
            this.btnRandom.Size = new System.Drawing.Size(176, 64);
            this.btnRandom.TabIndex = 10;
            this.btnRandom.Text = "RANDOM";
            this.btnRandom.UseVisualStyleBackColor = true;
            this.btnRandom.Click += new System.EventHandler(this.btnRandom_Click);
            // 
            // lblRandom
            // 
            this.lblRandom.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblRandom.Location = new System.Drawing.Point(316, 581);
            this.lblRandom.Name = "lblRandom";
            this.lblRandom.Size = new System.Drawing.Size(125, 101);
            this.lblRandom.TabIndex = 11;
            this.lblRandom.Text = "1";
            this.lblRandom.Click += new System.EventHandler(this.label2_Click);
            // 
            // radio_button
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(808, 762);
            this.Controls.Add(this.lblRandom);
            this.Controls.Add(this.btnRandom);
            this.Controls.Add(this.picPenguin);
            this.Controls.Add(this.picBlank);
            this.Controls.Add(this.picPolarBear);
            this.Controls.Add(this.btnQUIT);
            this.Controls.Add(this.btnOK);
            this.Controls.Add(this.chkGroom);
            this.Controls.Add(this.chkShots);
            this.Controls.Add(this.chkShampoo);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.label1);
            this.Name = "radio_button";
            this.Text = "Form1";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picPenguin)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBlank)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPolarBear)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton radOther;
        private System.Windows.Forms.RadioButton radPenguin;
        private System.Windows.Forms.RadioButton radPolarBear;
        private System.Windows.Forms.CheckBox chkShampoo;
        private System.Windows.Forms.CheckBox chkShots;
        private System.Windows.Forms.CheckBox chkGroom;
        private System.Windows.Forms.Button btnOK;
        private System.Windows.Forms.Button btnQUIT;
        private System.Windows.Forms.PictureBox picPolarBear;
        private System.Windows.Forms.PictureBox picBlank;
        private System.Windows.Forms.PictureBox picPenguin;
        private System.Windows.Forms.Button btnRandom;
        private System.Windows.Forms.Label lblRandom;
    }
}

