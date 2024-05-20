namespace basicAnimation
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
            this.picTarget = new System.Windows.Forms.PictureBox();
            this.picHappy = new System.Windows.Forms.PictureBox();
            this.lblOutput = new System.Windows.Forms.Label();
            this.lblProjectile = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.gunTimer = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.picTarget)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picHappy)).BeginInit();
            this.SuspendLayout();
            // 
            // picTarget
            // 
            this.picTarget.Image = global::basicAnimation.Properties.Resources.taregt;
            this.picTarget.Location = new System.Drawing.Point(963, 213);
            this.picTarget.Name = "picTarget";
            this.picTarget.Size = new System.Drawing.Size(180, 180);
            this.picTarget.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picTarget.TabIndex = 0;
            this.picTarget.TabStop = false;
            this.picTarget.Click += new System.EventHandler(this.picTarget_Click);
            // 
            // picHappy
            // 
            this.picHappy.Image = global::basicAnimation.Properties.Resources.patrick;
            this.picHappy.Location = new System.Drawing.Point(317, 467);
            this.picHappy.Name = "picHappy";
            this.picHappy.Size = new System.Drawing.Size(166, 144);
            this.picHappy.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picHappy.TabIndex = 1;
            this.picHappy.TabStop = false;
            // 
            // lblOutput
            // 
            this.lblOutput.Location = new System.Drawing.Point(502, 39);
            this.lblOutput.Name = "lblOutput";
            this.lblOutput.Size = new System.Drawing.Size(123, 87);
            this.lblOutput.TabIndex = 2;
            // 
            // lblProjectile
            // 
            this.lblProjectile.BackColor = System.Drawing.Color.Blue;
            this.lblProjectile.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(0)))), ((int)(((byte)(192)))));
            this.lblProjectile.Location = new System.Drawing.Point(401, 444);
            this.lblProjectile.Name = "lblProjectile";
            this.lblProjectile.Size = new System.Drawing.Size(10, 10);
            this.lblProjectile.TabIndex = 3;
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Interval = 75;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // gunTimer
            // 
            this.gunTimer.Interval = 10;
            this.gunTimer.Tick += new System.EventHandler(this.gunTimer_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1155, 1055);
            this.Controls.Add(this.lblProjectile);
            this.Controls.Add(this.lblOutput);
            this.Controls.Add(this.picHappy);
            this.Controls.Add(this.picTarget);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            ((System.ComponentModel.ISupportInitialize)(this.picTarget)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picHappy)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private PictureBox picTarget;
        private PictureBox picHappy;
        private Label lblOutput;
        private Label lblProjectile;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Timer gunTimer;
    }
}