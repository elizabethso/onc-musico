package musico;

import java.util.HashMap;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {

	/**
	 * Default serialVersionUID
	 */
	private static final long serialVersionUID = 1L;

	private String username;
	private String password;
    private String error="";
    
    private static HashMap<String, String> userPassword = new HashMap<String, String>();

    
    public LoginAction() {
		super();
		userPassword.put("Admin", "MusicoAdmin");
		userPassword.put("mflanigan", "EsacMike");
		userPassword.put("mchoi", "ONC!!Mera");
		userPassword.put("cchoi", "ONC!!Christy");
	}

	@Override
    public String execute() throws Exception {
		return loginProcess();
    }

	private String loginProcess() {
		if (userPassword.get(username) != null &&
			userPassword.get(username).equalsIgnoreCase(password)) {
	        return SUCCESS;
		}
		else {
	        error = "Invalid username/password, please try again.";
	        return ERROR;
		}
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getError() {
		return error;
	}
	
}