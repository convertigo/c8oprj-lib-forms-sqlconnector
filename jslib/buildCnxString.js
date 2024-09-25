/* Copilot helper: this is a javascript script executed with Rhino JS by a Convertigo Sequence  over the JVM. Available variables: log, dom, context, Driver, User, Password, Server, Port, Database*/
log.warn("Driver: " + Driver);
let Driver = Driver + "";
databaseTechnology ="";

switch (Driver) {
	case "com.mysql.jdbc.Driver":
		cnxString = "jdbc:mysql://" 
		databaseTechnology ="mysql";
		break;

	case "org.postgresql.Driver":
		cnxString = "jdbc:postgresql://" 
		databaseTechnology ="postgresql";
		break;

	case "net.sourceforge.jtds.jdbc.Driver":
		cnxString = "jdbc:jtds:sqlserver://" 
		databaseTechnology ="sqlserver";
		break;

	case "oracle.jdbc.driver.OracleDriver":
		cnxString = "jdbc:oracle://" 
		databaseTechnology ="oracle";
		break;

	case "org.mariadb.jdbc.Driver":
		cnxString = "jdbc:mysql://" 
		databaseTechnology ="mysql";
		break;
		
	default:
		cnxString = "jdbc:unknown://"
		break;
}

if (Port == null)
    Port = "";
	
cnxString += Server + (Port.length != 0 ? ":" + Port : "") + "/" + Database;
cnxString += "?user=" + User + "&password=" + Password;
log.warn("Database technology :" + databaseTechnology);
