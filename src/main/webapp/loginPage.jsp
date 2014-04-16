<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>ONC - MUSICO</title>
		<link rel="stylesheet" type="text/css" href="styles/cic.css"/>
		<link rel='shortcut icon' type='image/x-icon' href='images/favicon.ico' />
	</head>

	<body>
		<div id="banner">
			<a href="http://www.healthit.gov/" target="_blank" >
				<img src="images/HealthIT-logo-281x109.png" style= "position:absolute; right:2px;" alt="ONC Logo"/>
			</a>
			<div align="center">
			<img src="images/MUSICO BANNER.png" alt="Musico Banner"/>
			</div>
		</div>

		
		<s:if test="%{#error!=''}">
			<div><font color="red"><b><s:property value="error"/></b></font></div>
		</s:if>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

		<s:form action="login" method="post">
 			<s:textfield name="username" label="Please enter your username"/>
			<s:password name="password" label="Please enter your password"/>
        	<s:submit value="Login"/>
		</s:form>
			
	</body>
</html>