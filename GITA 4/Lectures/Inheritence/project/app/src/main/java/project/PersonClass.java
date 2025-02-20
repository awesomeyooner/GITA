//This class is what I call a shell. It doesn't do
//any calculations. It only defines an object with its
//attributes
package project;

public class PersonClass
{
	//Class Fields - person's attributes
	// seven attributes.
	private String strLName;
	private String strFName;
	private String strAddress;
	private String strCity;
	private String strState;
	private String strZip;
	protected String strPhone;

	//Class constructor to assign person' attributes
	PersonClass(String strLName, String strFName, String strAddress,
		String strCity, String strState, String strZip, String strPhone)
	{
		
		this.strLName = strLName;
		this.strFName = strFName;
		this.strAddress = strAddress;
		this.strCity = strCity;
		this.strState = strState;
		this.strZip = strZip;
		this.strPhone = strPhone;
		
	}   

	//access and modifier methods
	public void setLName(String strValue)
	{
		strLName = strValue;
	}
	public void setFName(String strValue)
	{
		strFName = strValue;
	}
	public void setAddress(String strValue)
	{
		strAddress = strValue;
	}
	public void setCity(String strValue)
	{
		strCity = strValue;
	}
	public void setState(String strValue)
	{
		strState = strValue;
	}
	public void setZip(String strValue)
	{
	strZip = strValue;
	}
	public void setPhone(String strValue)
	{
		strPhone = strValue;
	}
	public String getLName()
	{
		return strLName;
	}
	public String getFName()
	{
		return strFName;
	}
	public String getAddress()
	{
		return strAddress;
	}
	public String getCity()
	{
		return strCity;
	}
	public String getState()
	{
		return strState;
	}
	public String getZip()
	{
		return strZip;
	}
	public String getPhone()
	{
		return strPhone;
	}

}
