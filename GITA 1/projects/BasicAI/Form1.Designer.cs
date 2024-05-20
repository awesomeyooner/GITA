namespace BasicAI
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.picHeavy = new System.Windows.Forms.PictureBox();
            this.heavyTimer = new System.Windows.Forms.Timer(this.components);
            this.bulletTimer = new System.Windows.Forms.Timer(this.components);
            this.snailTimer = new System.Windows.Forms.Timer(this.components);
            this.picSnail = new System.Windows.Forms.PictureBox();
            this.imageList1 = new System.Windows.Forms.ImageList(this.components);
            this.lblProj = new System.Windows.Forms.Label();
            this.btnStart = new System.Windows.Forms.Button();
            this.life1 = new System.Windows.Forms.PictureBox();
            this.life3 = new System.Windows.Forms.PictureBox();
            this.life2 = new System.Windows.Forms.PictureBox();
            this.picLife = new System.Windows.Forms.PictureBox();
            this.enragePic = new System.Windows.Forms.PictureBox();
            this.normPic = new System.Windows.Forms.PictureBox();
            this.healthBar = new System.Windows.Forms.Label();
            this.lblSnailName = new System.Windows.Forms.Label();
            this.deadPic = new System.Windows.Forms.PictureBox();
            this.picHeavyDead = new System.Windows.Forms.PictureBox();
            this.lblEnd = new System.Windows.Forms.Label();
            this.btnReset = new System.Windows.Forms.Button();
            this.snailBank = new System.Windows.Forms.PictureBox();
            this.heavyBank = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.picHeavy)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.life1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.life3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.life2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLife)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.enragePic)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.normPic)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.deadPic)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picHeavyDead)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.snailBank)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.heavyBank)).BeginInit();
            this.SuspendLayout();
            // 
            // picHeavy
            // 
            this.picHeavy.Image = global::BasicAI.Properties.Resources.heaby;
            this.picHeavy.Location = new System.Drawing.Point(512, 208);
            this.picHeavy.Name = "picHeavy";
            this.picHeavy.Size = new System.Drawing.Size(182, 168);
            this.picHeavy.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picHeavy.TabIndex = 0;
            this.picHeavy.TabStop = false;
            this.picHeavy.MouseClick += new System.Windows.Forms.MouseEventHandler(this.picHeavy_MouseClick);
            // 
            // heavyTimer
            // 
            this.heavyTimer.Enabled = true;
            this.heavyTimer.Interval = 25;
            this.heavyTimer.Tick += new System.EventHandler(this.heavyTimer_Tick);
            // 
            // bulletTimer
            // 
            this.bulletTimer.Interval = 20;
            this.bulletTimer.Tick += new System.EventHandler(this.bulletTimer_Tick);
            // 
            // snailTimer
            // 
            this.snailTimer.Interval = 20;
            this.snailTimer.Tick += new System.EventHandler(this.snailTimer_Tick);
            // 
            // picSnail
            // 
            this.picSnail.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail.Location = new System.Drawing.Point(754, 443);
            this.picSnail.Name = "picSnail";
            this.picSnail.Size = new System.Drawing.Size(182, 168);
            this.picSnail.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail.TabIndex = 1;
            this.picSnail.TabStop = false;
            this.picSnail.Click += new System.EventHandler(this.picSnail_Click);
            // 
            // imageList1
            // 
            this.imageList1.ColorDepth = System.Windows.Forms.ColorDepth.Depth8Bit;
            this.imageList1.ImageSize = new System.Drawing.Size(16, 16);
            this.imageList1.TransparentColor = System.Drawing.Color.Transparent;
            // 
            // lblProj
            // 
            this.lblProj.BackColor = System.Drawing.Color.Blue;
            this.lblProj.Location = new System.Drawing.Point(789, 245);
            this.lblProj.Name = "lblProj";
            this.lblProj.Size = new System.Drawing.Size(10, 10);
            this.lblProj.TabIndex = 3;
            // 
            // btnStart
            // 
            this.btnStart.Font = new System.Drawing.Font("Showcard Gothic", 100.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnStart.Location = new System.Drawing.Point(12, 63);
            this.btnStart.Name = "btnStart";
            this.btnStart.Size = new System.Drawing.Size(1325, 1038);
            this.btnStart.TabIndex = 4;
            this.btnStart.Text = "BEGIN FIGHT";
            this.btnStart.UseVisualStyleBackColor = true;
            this.btnStart.Click += new System.EventHandler(this.button1_Click);
            // 
            // life1
            // 
            this.life1.Image = global::BasicAI.Properties.Resources.heart;
            this.life1.Location = new System.Drawing.Point(33, 878);
            this.life1.Name = "life1";
            this.life1.Size = new System.Drawing.Size(149, 140);
            this.life1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.life1.TabIndex = 5;
            this.life1.TabStop = false;
            // 
            // life3
            // 
            this.life3.Image = global::BasicAI.Properties.Resources.heart;
            this.life3.Location = new System.Drawing.Point(320, 878);
            this.life3.Name = "life3";
            this.life3.Size = new System.Drawing.Size(149, 140);
            this.life3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.life3.TabIndex = 6;
            this.life3.TabStop = false;
            // 
            // life2
            // 
            this.life2.Image = global::BasicAI.Properties.Resources.heart;
            this.life2.Location = new System.Drawing.Point(177, 878);
            this.life2.Name = "life2";
            this.life2.Size = new System.Drawing.Size(149, 140);
            this.life2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.life2.TabIndex = 7;
            this.life2.TabStop = false;
            // 
            // picLife
            // 
            this.picLife.Image = global::BasicAI.Properties.Resources.heart;
            this.picLife.Location = new System.Drawing.Point(1239, 961);
            this.picLife.Name = "picLife";
            this.picLife.Size = new System.Drawing.Size(149, 140);
            this.picLife.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picLife.TabIndex = 8;
            this.picLife.TabStop = false;
            this.picLife.Visible = false;
            // 
            // enragePic
            // 
            this.enragePic.Image = global::BasicAI.Properties.Resources.enragedSnail;
            this.enragePic.Location = new System.Drawing.Point(1071, 898);
            this.enragePic.Name = "enragePic";
            this.enragePic.Size = new System.Drawing.Size(182, 168);
            this.enragePic.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.enragePic.TabIndex = 9;
            this.enragePic.TabStop = false;
            this.enragePic.Visible = false;
            // 
            // normPic
            // 
            this.normPic.Image = global::BasicAI.Properties.Resources.snail1;
            this.normPic.Location = new System.Drawing.Point(1010, 850);
            this.normPic.Name = "normPic";
            this.normPic.Size = new System.Drawing.Size(182, 168);
            this.normPic.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.normPic.TabIndex = 10;
            this.normPic.TabStop = false;
            this.normPic.Visible = false;
            // 
            // healthBar
            // 
            this.healthBar.BackColor = System.Drawing.Color.Red;
            this.healthBar.Location = new System.Drawing.Point(69, 70);
            this.healthBar.Name = "healthBar";
            this.healthBar.Size = new System.Drawing.Size(1123, 10);
            this.healthBar.TabIndex = 11;
            // 
            // lblSnailName
            // 
            this.lblSnailName.AutoSize = true;
            this.lblSnailName.Font = new System.Drawing.Font("Showcard Gothic", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblSnailName.Location = new System.Drawing.Point(485, 25);
            this.lblSnailName.Name = "lblSnailName";
            this.lblSnailName.Size = new System.Drawing.Size(370, 37);
            this.lblSnailName.TabIndex = 12;
            this.lblSnailName.Text = "DEVOURER OF WORLDS";
            // 
            // deadPic
            // 
            this.deadPic.Image = global::BasicAI.Properties.Resources.deadSnail;
            this.deadPic.Location = new System.Drawing.Point(932, 789);
            this.deadPic.Name = "deadPic";
            this.deadPic.Size = new System.Drawing.Size(182, 168);
            this.deadPic.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.deadPic.TabIndex = 13;
            this.deadPic.TabStop = false;
            this.deadPic.Visible = false;
            // 
            // picHeavyDead
            // 
            this.picHeavyDead.Image = ((System.Drawing.Image)(resources.GetObject("picHeavyDead.Image")));
            this.picHeavyDead.Location = new System.Drawing.Point(831, 814);
            this.picHeavyDead.Name = "picHeavyDead";
            this.picHeavyDead.Size = new System.Drawing.Size(131, 160);
            this.picHeavyDead.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picHeavyDead.TabIndex = 14;
            this.picHeavyDead.TabStop = false;
            this.picHeavyDead.Visible = false;
            // 
            // lblEnd
            // 
            this.lblEnd.Font = new System.Drawing.Font("Showcard Gothic", 108F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblEnd.Location = new System.Drawing.Point(120, 419);
            this.lblEnd.Name = "lblEnd";
            this.lblEnd.Size = new System.Drawing.Size(1133, 828);
            this.lblEnd.TabIndex = 15;
            this.lblEnd.Text = "GAME OVER";
            this.lblEnd.Visible = false;
            // 
            // btnReset
            // 
            this.btnReset.Enabled = false;
            this.btnReset.Font = new System.Drawing.Font("Showcard Gothic", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnReset.Location = new System.Drawing.Point(932, 83);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(229, 75);
            this.btnReset.TabIndex = 16;
            this.btnReset.Text = "RESTART";
            this.btnReset.UseVisualStyleBackColor = true;
            this.btnReset.Visible = false;
            this.btnReset.Click += new System.EventHandler(this.btnReset_Click);
            // 
            // snailBank
            // 
            this.snailBank.Image = global::BasicAI.Properties.Resources.snail1;
            this.snailBank.Location = new System.Drawing.Point(922, 763);
            this.snailBank.Name = "snailBank";
            this.snailBank.Size = new System.Drawing.Size(182, 168);
            this.snailBank.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.snailBank.TabIndex = 17;
            this.snailBank.TabStop = false;
            this.snailBank.Visible = false;
            // 
            // heavyBank
            // 
            this.heavyBank.Image = global::BasicAI.Properties.Resources.heaby;
            this.heavyBank.Location = new System.Drawing.Point(968, 698);
            this.heavyBank.Name = "heavyBank";
            this.heavyBank.Size = new System.Drawing.Size(182, 168);
            this.heavyBank.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.heavyBank.TabIndex = 18;
            this.heavyBank.TabStop = false;
            this.heavyBank.Visible = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1690, 1055);
            this.Controls.Add(this.btnStart);
            this.Controls.Add(this.heavyBank);
            this.Controls.Add(this.snailBank);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.picHeavyDead);
            this.Controls.Add(this.deadPic);
            this.Controls.Add(this.lblSnailName);
            this.Controls.Add(this.healthBar);
            this.Controls.Add(this.normPic);
            this.Controls.Add(this.enragePic);
            this.Controls.Add(this.picLife);
            this.Controls.Add(this.life2);
            this.Controls.Add(this.life3);
            this.Controls.Add(this.life1);
            this.Controls.Add(this.lblProj);
            this.Controls.Add(this.picSnail);
            this.Controls.Add(this.picHeavy);
            this.Controls.Add(this.lblEnd);
            this.KeyPreview = true;
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            this.MouseClick += new System.Windows.Forms.MouseEventHandler(this.Form1_MouseClick);
            ((System.ComponentModel.ISupportInitialize)(this.picHeavy)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.life1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.life3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.life2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLife)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.enragePic)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.normPic)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.deadPic)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picHeavyDead)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.snailBank)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.heavyBank)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private PictureBox picHeavy;
        private System.Windows.Forms.Timer heavyTimer;
        private System.Windows.Forms.Timer bulletTimer;
        private System.Windows.Forms.Timer snailTimer;
        private PictureBox picSnail;
        private ImageList imageList1;
        private Label lblProj;
        private Button btnStart;
        private PictureBox life1;
        private PictureBox life3;
        private PictureBox life2;
        private PictureBox picLife;
        private PictureBox enragePic;
        private PictureBox normPic;
        private Label healthBar;
        private Label lblSnailName;
        private PictureBox deadPic;
        private PictureBox picHeavyDead;
        private Label lblEnd;
        private Button btnReset;
        private PictureBox snailBank;
        private PictureBox heavyBank;
    }
}