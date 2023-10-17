package com.base;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.util.Log;

public class DataScanModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    DataScanModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "DataScanModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location,  Callback callBack) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        Integer eventId = 30;
        callBack.invoke(null, eventId);
    }

    public static void sendEvent(String event, String data) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(event, data);
    }

    @ReactMethod
    public void sendDataToJS(String data) {
        sendEvent("onDataReceived", data);
    }

    // Required for rn built in EventEmitter Calls.
    @ReactMethod
    public void addListener(String eventName) {

    }

    @ReactMethod
    public void removeListeners(Integer count) {

    }

}