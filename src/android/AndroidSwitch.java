package com.man-r.androidswitch;
 
import org.apache.cordova.*;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Intent;


public class AndroidSwitch extends CordovaPlugin {
	public static final String ACTION_ADD_ENTRY = "switchLocation";

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
		    if (ACTION_ADD_ENTRY.equals(action)) { 
			    JSONObject arg_object = args.getJSONObject(0);
			    Intent switchIntent = new Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS);
	        	this.cordova.getActivity().startActivity(switchIntent);
			    callbackContext.success();
			    return true;
		    }
		    callbackContext.error("Invalid action");
		    return false;
		} catch(Exception e) {
		    System.err.println("Exception: " + e.getMessage());
		    callbackContext.error(e.getMessage());
		    return false;
		} 
	}
}

