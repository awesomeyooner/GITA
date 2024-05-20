namespace Mailing_Label
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
            this.textFirstName = new System.Windows.Forms.TextBox();
            this.labelFirstName = new System.Windows.Forms.Label();
            this.QUIT = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.labelStreet = new System.Windows.Forms.Label();
            this.textStreet = new System.Windows.Forms.TextBox();
            this.labelLastName = new System.Windows.Forms.Label();
            this.textLastName = new System.Windows.Forms.TextBox();
            this.labelCity = new System.Windows.Forms.Label();
            this.textCity = new System.Windows.Forms.TextBox();
            this.labelState = new System.Windows.Forms.Label();
            this.textState = new System.Windows.Forms.TextBox();
            this.labelZipcode = new System.Windows.Forms.Label();
            this.textZipcode = new System.Windows.Forms.TextBox();
            this.labelMailingList = new System.Windows.Forms.Label();
            this.opName = new System.Windows.Forms.Label();
            this.opAddress = new System.Windows.Forms.Label();
            this.opArea = new System.Windows.Forms.Label();
            this.buttonPUSH = new System.Windows.Forms.Button();
            this.clearFirstName = new System.Windows.Forms.Button();
            this.clearLastName = new System.Windows.Forms.Button();
            this.clearStreet = new System.Windows.Forms.Button();
            this.clearCity = new System.Windows.Forms.Button();
            this.clearState = new System.Windows.Forms.Button();
            this.clearZip = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // textFirstName
            // 
            this.textFirstName.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textFirstName.Location = new System.Drawing.Point(127, 29);
            this.textFirstName.Name = "textFirstName";
            this.textFirstName.Size = new System.Drawing.Size(282, 31);
            this.textFirstName.TabIndex = 0;
            // 
            // labelFirstName
            // 
            this.labelFirstName.AutoSize = true;
            this.labelFirstName.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelFirstName.Location = new System.Drawing.Point(12, 33);
            this.labelFirstName.Name = "labelFirstName";
            this.labelFirstName.Size = new System.Drawing.Size(103, 24);
            this.labelFirstName.TabIndex = 1;
            this.labelFirstName.Text = "First Name";
            // 
            // QUIT
            // 
            this.QUIT.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.QUIT.Location = new System.Drawing.Point(651, 7);
            this.QUIT.Name = "QUIT";
            this.QUIT.Size = new System.Drawing.Size(137, 65);
            this.QUIT.TabIndex = 2;
            this.QUIT.Text = "QUIT";
            this.QUIT.UseVisualStyleBackColor = true;
            this.QUIT.Click += new System.EventHandler(this.QUIT_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(712, 421);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(86, 20);
            this.label2.TabIndex = 3;
            this.label2.Text = "Aaron Yoon";
            // 
            // labelStreet
            // 
            this.labelStreet.AutoSize = true;
            this.labelStreet.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelStreet.Location = new System.Drawing.Point(12, 130);
            this.labelStreet.Name = "labelStreet";
            this.labelStreet.Size = new System.Drawing.Size(119, 24);
            this.labelStreet.TabIndex = 5;
            this.labelStreet.Text = "Enter Street";
            // 
            // textStreet
            // 
            this.textStreet.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textStreet.Location = new System.Drawing.Point(127, 126);
            this.textStreet.Name = "textStreet";
            this.textStreet.Size = new System.Drawing.Size(282, 31);
            this.textStreet.TabIndex = 4;
            // 
            // labelLastName
            // 
            this.labelLastName.AutoSize = true;
            this.labelLastName.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelLastName.Location = new System.Drawing.Point(12, 79);
            this.labelLastName.Name = "labelLastName";
            this.labelLastName.Size = new System.Drawing.Size(98, 24);
            this.labelLastName.TabIndex = 7;
            this.labelLastName.Text = "Last Name";
            // 
            // textLastName
            // 
            this.textLastName.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textLastName.Location = new System.Drawing.Point(127, 75);
            this.textLastName.Name = "textLastName";
            this.textLastName.Size = new System.Drawing.Size(282, 31);
            this.textLastName.TabIndex = 6;
            // 
            // labelCity
            // 
            this.labelCity.AutoSize = true;
            this.labelCity.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelCity.Location = new System.Drawing.Point(12, 181);
            this.labelCity.Name = "labelCity";
            this.labelCity.Size = new System.Drawing.Size(94, 24);
            this.labelCity.TabIndex = 9;
            this.labelCity.Text = "Enter City";
            this.labelCity.Click += new System.EventHandler(this.label1_Click);
            // 
            // textCity
            // 
            this.textCity.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textCity.Location = new System.Drawing.Point(127, 177);
            this.textCity.Name = "textCity";
            this.textCity.Size = new System.Drawing.Size(282, 31);
            this.textCity.TabIndex = 8;
            // 
            // labelState
            // 
            this.labelState.AutoSize = true;
            this.labelState.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelState.Location = new System.Drawing.Point(12, 228);
            this.labelState.Name = "labelState";
            this.labelState.Size = new System.Drawing.Size(109, 24);
            this.labelState.TabIndex = 11;
            this.labelState.Text = "Enter State";
            // 
            // textState
            // 
            this.textState.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textState.Location = new System.Drawing.Point(127, 224);
            this.textState.Name = "textState";
            this.textState.Size = new System.Drawing.Size(282, 31);
            this.textState.TabIndex = 10;
            // 
            // labelZipcode
            // 
            this.labelZipcode.AutoSize = true;
            this.labelZipcode.Font = new System.Drawing.Font("Comic Sans MS", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelZipcode.Location = new System.Drawing.Point(-2, 276);
            this.labelZipcode.Name = "labelZipcode";
            this.labelZipcode.Size = new System.Drawing.Size(133, 24);
            this.labelZipcode.TabIndex = 13;
            this.labelZipcode.Text = "Enter Zip code";
            // 
            // textZipcode
            // 
            this.textZipcode.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.textZipcode.Location = new System.Drawing.Point(127, 272);
            this.textZipcode.Name = "textZipcode";
            this.textZipcode.Size = new System.Drawing.Size(282, 31);
            this.textZipcode.TabIndex = 12;
            // 
            // labelMailingList
            // 
            this.labelMailingList.AutoSize = true;
            this.labelMailingList.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.labelMailingList.Location = new System.Drawing.Point(522, 96);
            this.labelMailingList.Name = "labelMailingList";
            this.labelMailingList.Size = new System.Drawing.Size(172, 39);
            this.labelMailingList.TabIndex = 14;
            this.labelMailingList.Text = "Mailing List:";
            // 
            // opName
            // 
            this.opName.AutoSize = true;
            this.opName.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.opName.Location = new System.Drawing.Point(507, 157);
            this.opName.Name = "opName";
            this.opName.Size = new System.Drawing.Size(168, 28);
            this.opName.TabIndex = 15;
            this.opName.Text = "name placeholder";
            this.opName.Click += new System.EventHandler(this.opName_Click);
            // 
            // opAddress
            // 
            this.opAddress.AutoSize = true;
            this.opAddress.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.opAddress.Location = new System.Drawing.Point(507, 185);
            this.opAddress.Name = "opAddress";
            this.opAddress.Size = new System.Drawing.Size(187, 28);
            this.opAddress.TabIndex = 16;
            this.opAddress.Text = "address placeholder";
            this.opAddress.Click += new System.EventHandler(this.label1_Click_1);
            // 
            // opArea
            // 
            this.opArea.AutoSize = true;
            this.opArea.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.opArea.Location = new System.Drawing.Point(509, 213);
            this.opArea.Name = "opArea";
            this.opArea.Size = new System.Drawing.Size(151, 28);
            this.opArea.TabIndex = 17;
            this.opArea.Text = "city placeholder";
            this.opArea.Click += new System.EventHandler(this.opArea_Click);
            // 
            // buttonPUSH
            // 
            this.buttonPUSH.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.buttonPUSH.Location = new System.Drawing.Point(127, 358);
            this.buttonPUSH.Name = "buttonPUSH";
            this.buttonPUSH.Size = new System.Drawing.Size(227, 54);
            this.buttonPUSH.TabIndex = 18;
            this.buttonPUSH.Text = "Display Label";
            this.buttonPUSH.UseVisualStyleBackColor = true;
            this.buttonPUSH.Click += new System.EventHandler(this.buttonPUSH_Click);
            // 
            // clearFirstName
            // 
            this.clearFirstName.Location = new System.Drawing.Point(415, 32);
            this.clearFirstName.Name = "clearFirstName";
            this.clearFirstName.Size = new System.Drawing.Size(68, 29);
            this.clearFirstName.TabIndex = 19;
            this.clearFirstName.Text = "Clear";
            this.clearFirstName.UseVisualStyleBackColor = true;
            this.clearFirstName.Click += new System.EventHandler(this.clearFirstName_Click);
            // 
            // clearLastName
            // 
            this.clearLastName.Location = new System.Drawing.Point(415, 79);
            this.clearLastName.Name = "clearLastName";
            this.clearLastName.Size = new System.Drawing.Size(68, 29);
            this.clearLastName.TabIndex = 20;
            this.clearLastName.Text = "Clear";
            this.clearLastName.UseVisualStyleBackColor = true;
            this.clearLastName.Click += new System.EventHandler(this.clearLastName_Click);
            // 
            // clearStreet
            // 
            this.clearStreet.Location = new System.Drawing.Point(415, 129);
            this.clearStreet.Name = "clearStreet";
            this.clearStreet.Size = new System.Drawing.Size(68, 29);
            this.clearStreet.TabIndex = 21;
            this.clearStreet.Text = "Clear";
            this.clearStreet.UseVisualStyleBackColor = true;
            this.clearStreet.Click += new System.EventHandler(this.clearStreet_Click);
            // 
            // clearCity
            // 
            this.clearCity.Location = new System.Drawing.Point(415, 176);
            this.clearCity.Name = "clearCity";
            this.clearCity.Size = new System.Drawing.Size(68, 29);
            this.clearCity.TabIndex = 22;
            this.clearCity.Text = "Clear";
            this.clearCity.UseVisualStyleBackColor = true;
            this.clearCity.Click += new System.EventHandler(this.clearCity_Click);
            // 
            // clearState
            // 
            this.clearState.Location = new System.Drawing.Point(415, 223);
            this.clearState.Name = "clearState";
            this.clearState.Size = new System.Drawing.Size(68, 29);
            this.clearState.TabIndex = 23;
            this.clearState.Text = "Clear";
            this.clearState.UseVisualStyleBackColor = true;
            this.clearState.Click += new System.EventHandler(this.clearState_Click);
            // 
            // clearZip
            // 
            this.clearZip.Location = new System.Drawing.Point(415, 271);
            this.clearZip.Name = "clearZip";
            this.clearZip.Size = new System.Drawing.Size(68, 29);
            this.clearZip.TabIndex = 24;
            this.clearZip.Text = "Clear";
            this.clearZip.UseVisualStyleBackColor = true;
            this.clearZip.Click += new System.EventHandler(this.clearZip_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.clearZip);
            this.Controls.Add(this.clearState);
            this.Controls.Add(this.clearCity);
            this.Controls.Add(this.clearStreet);
            this.Controls.Add(this.clearLastName);
            this.Controls.Add(this.clearFirstName);
            this.Controls.Add(this.buttonPUSH);
            this.Controls.Add(this.opArea);
            this.Controls.Add(this.opAddress);
            this.Controls.Add(this.opName);
            this.Controls.Add(this.labelMailingList);
            this.Controls.Add(this.labelZipcode);
            this.Controls.Add(this.textZipcode);
            this.Controls.Add(this.labelState);
            this.Controls.Add(this.textState);
            this.Controls.Add(this.labelCity);
            this.Controls.Add(this.textCity);
            this.Controls.Add(this.labelLastName);
            this.Controls.Add(this.textLastName);
            this.Controls.Add(this.labelStreet);
            this.Controls.Add(this.textStreet);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.QUIT);
            this.Controls.Add(this.labelFirstName);
            this.Controls.Add(this.textFirstName);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private TextBox textFirstName;
        private Label labelFirstName;
        private Button QUIT;
        private Label label2;
        private Label labelStreet;
        private TextBox textStreet;
        private Label labelLastName;
        private TextBox textLastName;
        private Label labelCity;
        private TextBox textCity;
        private Label labelState;
        private TextBox textState;
        private Label labelZipcode;
        private TextBox textZipcode;
        private Label labelMailingList;
        private Label opName;
        private Label opAddress;
        private Label opArea;
        private Button buttonPUSH;
        private Button clearFirstName;
        private Button clearLastName;
        private Button clearStreet;
        private Button clearCity;
        private Button clearState;
        private Button clearZip;
    }
}