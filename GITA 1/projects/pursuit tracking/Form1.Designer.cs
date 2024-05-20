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
            this.deadPic = new System.Windows.Forms.PictureBox();
            this.picHeavyDead = new System.Windows.Forms.PictureBox();
            this.lblEnd = new System.Windows.Forms.Label();
            this.btnReset = new System.Windows.Forms.Button();
            this.snailBank = new System.Windows.Forms.PictureBox();
            this.heavyBank = new System.Windows.Forms.PictureBox();
            this.button1 = new System.Windows.Forms.Button();
            this.snailTimer2 = new System.Windows.Forms.Timer(this.components);
            this.picSnail2 = new System.Windows.Forms.PictureBox();
            this.healthBar2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.snailTimer3 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer4 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer5 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer6 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer7 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer8 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer9 = new System.Windows.Forms.Timer(this.components);
            this.snailTimer10 = new System.Windows.Forms.Timer(this.components);
            this.picSnail3 = new System.Windows.Forms.PictureBox();
            this.picSnail4 = new System.Windows.Forms.PictureBox();
            this.picSnail5 = new System.Windows.Forms.PictureBox();
            this.picSnail6 = new System.Windows.Forms.PictureBox();
            this.picSnail7 = new System.Windows.Forms.PictureBox();
            this.picSnail8 = new System.Windows.Forms.PictureBox();
            this.picSnail9 = new System.Windows.Forms.PictureBox();
            this.picSnail10 = new System.Windows.Forms.PictureBox();
            this.healthBar3 = new System.Windows.Forms.Label();
            this.healthBar4 = new System.Windows.Forms.Label();
            this.healthBar5 = new System.Windows.Forms.Label();
            this.healthBar6 = new System.Windows.Forms.Label();
            this.healthBar7 = new System.Windows.Forms.Label();
            this.healthBar8 = new System.Windows.Forms.Label();
            this.healthBar9 = new System.Windows.Forms.Label();
            this.healthBar10 = new System.Windows.Forms.Label();
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
            ((System.ComponentModel.ISupportInitialize)(this.picSnail2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail7)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail8)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail9)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail10)).BeginInit();
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
            this.picSnail.Location = new System.Drawing.Point(54, 477);
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
            this.btnStart.Location = new System.Drawing.Point(780, -3);
            this.btnStart.Name = "btnStart";
            this.btnStart.Size = new System.Drawing.Size(688, 198);
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
            this.enragePic.Image = ((System.Drawing.Image)(resources.GetObject("enragePic.Image")));
            this.enragePic.Location = new System.Drawing.Point(1137, 636);
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
            this.lblEnd.Location = new System.Drawing.Point(138, 424);
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
            this.heavyBank.Location = new System.Drawing.Point(542, 680);
            this.heavyBank.Name = "heavyBank";
            this.heavyBank.Size = new System.Drawing.Size(182, 168);
            this.heavyBank.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.heavyBank.TabIndex = 18;
            this.heavyBank.TabStop = false;
            this.heavyBank.Visible = false;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(272, 122);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(94, 29);
            this.button1.TabIndex = 19;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // picSnail2
            // 
            this.picSnail2.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail2.Location = new System.Drawing.Point(126, 488);
            this.picSnail2.Name = "picSnail2";
            this.picSnail2.Size = new System.Drawing.Size(182, 168);
            this.picSnail2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail2.TabIndex = 20;
            this.picSnail2.TabStop = false;
            // 
            // healthBar2
            // 
            this.healthBar2.BackColor = System.Drawing.Color.Red;
            this.healthBar2.Location = new System.Drawing.Point(93, 185);
            this.healthBar2.Name = "healthBar2";
            this.healthBar2.Size = new System.Drawing.Size(1123, 10);
            this.healthBar2.TabIndex = 21;
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(33, 93);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(252, 65);
            this.label1.TabIndex = 22;
            this.label1.Text = "Points: 0";
            // 
            // picSnail3
            // 
            this.picSnail3.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail3.Location = new System.Drawing.Point(210, 488);
            this.picSnail3.Name = "picSnail3";
            this.picSnail3.Size = new System.Drawing.Size(182, 168);
            this.picSnail3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail3.TabIndex = 23;
            this.picSnail3.TabStop = false;
            // 
            // picSnail4
            // 
            this.picSnail4.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail4.Location = new System.Drawing.Point(314, 488);
            this.picSnail4.Name = "picSnail4";
            this.picSnail4.Size = new System.Drawing.Size(182, 168);
            this.picSnail4.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail4.TabIndex = 24;
            this.picSnail4.TabStop = false;
            // 
            // picSnail5
            // 
            this.picSnail5.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail5.Location = new System.Drawing.Point(388, 477);
            this.picSnail5.Name = "picSnail5";
            this.picSnail5.Size = new System.Drawing.Size(182, 168);
            this.picSnail5.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail5.TabIndex = 25;
            this.picSnail5.TabStop = false;
            this.picSnail5.Click += new System.EventHandler(this.pictureBox3_Click);
            // 
            // picSnail6
            // 
            this.picSnail6.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail6.Location = new System.Drawing.Point(445, 477);
            this.picSnail6.Name = "picSnail6";
            this.picSnail6.Size = new System.Drawing.Size(182, 168);
            this.picSnail6.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail6.TabIndex = 26;
            this.picSnail6.TabStop = false;
            // 
            // picSnail7
            // 
            this.picSnail7.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail7.Location = new System.Drawing.Point(512, 477);
            this.picSnail7.Name = "picSnail7";
            this.picSnail7.Size = new System.Drawing.Size(182, 168);
            this.picSnail7.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail7.TabIndex = 27;
            this.picSnail7.TabStop = false;
            // 
            // picSnail8
            // 
            this.picSnail8.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail8.Location = new System.Drawing.Point(561, 477);
            this.picSnail8.Name = "picSnail8";
            this.picSnail8.Size = new System.Drawing.Size(182, 168);
            this.picSnail8.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail8.TabIndex = 28;
            this.picSnail8.TabStop = false;
            // 
            // picSnail9
            // 
            this.picSnail9.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail9.Location = new System.Drawing.Point(633, 477);
            this.picSnail9.Name = "picSnail9";
            this.picSnail9.Size = new System.Drawing.Size(182, 168);
            this.picSnail9.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail9.TabIndex = 29;
            this.picSnail9.TabStop = false;
            // 
            // picSnail10
            // 
            this.picSnail10.Image = global::BasicAI.Properties.Resources.snail1;
            this.picSnail10.Location = new System.Drawing.Point(700, 477);
            this.picSnail10.Name = "picSnail10";
            this.picSnail10.Size = new System.Drawing.Size(182, 168);
            this.picSnail10.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picSnail10.TabIndex = 30;
            this.picSnail10.TabStop = false;
            // 
            // healthBar3
            // 
            this.healthBar3.BackColor = System.Drawing.Color.Red;
            this.healthBar3.Location = new System.Drawing.Point(78, 208);
            this.healthBar3.Name = "healthBar3";
            this.healthBar3.Size = new System.Drawing.Size(1123, 10);
            this.healthBar3.TabIndex = 31;
            // 
            // healthBar4
            // 
            this.healthBar4.BackColor = System.Drawing.Color.Red;
            this.healthBar4.Location = new System.Drawing.Point(117, 235);
            this.healthBar4.Name = "healthBar4";
            this.healthBar4.Size = new System.Drawing.Size(1123, 10);
            this.healthBar4.TabIndex = 32;
            // 
            // healthBar5
            // 
            this.healthBar5.BackColor = System.Drawing.Color.Red;
            this.healthBar5.Location = new System.Drawing.Point(117, 267);
            this.healthBar5.Name = "healthBar5";
            this.healthBar5.Size = new System.Drawing.Size(1123, 10);
            this.healthBar5.TabIndex = 33;
            // 
            // healthBar6
            // 
            this.healthBar6.BackColor = System.Drawing.Color.Red;
            this.healthBar6.Location = new System.Drawing.Point(138, 302);
            this.healthBar6.Name = "healthBar6";
            this.healthBar6.Size = new System.Drawing.Size(1123, 10);
            this.healthBar6.TabIndex = 34;
            // 
            // healthBar7
            // 
            this.healthBar7.BackColor = System.Drawing.Color.Red;
            this.healthBar7.Location = new System.Drawing.Point(126, 332);
            this.healthBar7.Name = "healthBar7";
            this.healthBar7.Size = new System.Drawing.Size(1123, 10);
            this.healthBar7.TabIndex = 35;
            this.healthBar7.Click += new System.EventHandler(this.label6_Click);
            // 
            // healthBar8
            // 
            this.healthBar8.BackColor = System.Drawing.Color.Red;
            this.healthBar8.Location = new System.Drawing.Point(126, 366);
            this.healthBar8.Name = "healthBar8";
            this.healthBar8.Size = new System.Drawing.Size(1123, 10);
            this.healthBar8.TabIndex = 36;
            // 
            // healthBar9
            // 
            this.healthBar9.BackColor = System.Drawing.Color.Red;
            this.healthBar9.Location = new System.Drawing.Point(117, 390);
            this.healthBar9.Name = "healthBar9";
            this.healthBar9.Size = new System.Drawing.Size(1123, 10);
            this.healthBar9.TabIndex = 37;
            // 
            // healthBar10
            // 
            this.healthBar10.BackColor = System.Drawing.Color.Red;
            this.healthBar10.Location = new System.Drawing.Point(117, 424);
            this.healthBar10.Name = "healthBar10";
            this.healthBar10.Size = new System.Drawing.Size(1123, 10);
            this.healthBar10.TabIndex = 38;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1690, 1055);
            this.Controls.Add(this.healthBar10);
            this.Controls.Add(this.healthBar9);
            this.Controls.Add(this.healthBar8);
            this.Controls.Add(this.healthBar7);
            this.Controls.Add(this.healthBar6);
            this.Controls.Add(this.healthBar5);
            this.Controls.Add(this.healthBar4);
            this.Controls.Add(this.healthBar3);
            this.Controls.Add(this.picSnail10);
            this.Controls.Add(this.picSnail9);
            this.Controls.Add(this.picSnail8);
            this.Controls.Add(this.picSnail7);
            this.Controls.Add(this.picSnail6);
            this.Controls.Add(this.picSnail5);
            this.Controls.Add(this.picSnail4);
            this.Controls.Add(this.picSnail3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.healthBar2);
            this.Controls.Add(this.picSnail2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.btnStart);
            this.Controls.Add(this.heavyBank);
            this.Controls.Add(this.snailBank);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.picHeavyDead);
            this.Controls.Add(this.deadPic);
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
            ((System.ComponentModel.ISupportInitialize)(this.picSnail2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail7)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail8)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail9)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picSnail10)).EndInit();
            this.ResumeLayout(false);

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
        private PictureBox deadPic;
        private PictureBox picHeavyDead;
        private Label lblEnd;
        private Button btnReset;
        private PictureBox snailBank;
        private PictureBox heavyBank;
        private Button button1;
        private System.Windows.Forms.Timer snailTimer2;
        private PictureBox picSnail2;
        private Label healthBar2;
        private Label label1;
        private System.Windows.Forms.Timer snailTimer3;
        private System.Windows.Forms.Timer snailTimer4;
        private System.Windows.Forms.Timer snailTimer5;
        private System.Windows.Forms.Timer snailTimer6;
        private System.Windows.Forms.Timer snailTimer7;
        private System.Windows.Forms.Timer snailTimer8;
        private System.Windows.Forms.Timer snailTimer9;
        private System.Windows.Forms.Timer snailTimer10;
        private PictureBox picSnail3;
        private PictureBox picSnail4;
        private PictureBox picSnail5;
        private PictureBox picSnail6;
        private PictureBox picSnail7;
        private PictureBox picSnail8;
        private PictureBox picSnail9;
        private PictureBox picSnail10;
        private Label healthBar3;
        private Label healthBar4;
        private Label healthBar5;
        private Label healthBar6;
        private Label healthBar7;
        private Label healthBar8;
        private Label healthBar9;
        private Label healthBar10;
    }
}