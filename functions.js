function getSession(name)
{
	if(!sessionStorage.getItem(name))
	{
		return FALSE;
	}
	return sessionStorage.getItem(name);
}
function setSession(name, value)
{
	sessionStorage.setItem(name, value);
}
function getURL()
{
	return window.location.toString();
}

		