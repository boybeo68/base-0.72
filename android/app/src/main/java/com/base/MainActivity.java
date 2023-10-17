package com.base;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;
import android.util.Log;
import android.view.View;


import com.keyence.autoid.sdk.scan.DecodeResult;
import com.keyence.autoid.sdk.scan.ScanManager;
import com.keyence.autoid.sdk.scan.scanparams.CodeType;
import com.keyence.autoid.sdk.scan.scanparams.DataOutput;

public class MainActivity extends ReactActivity implements ScanManager.DataListener  {

  private final static String LOGFILE_NAME = "inventory.csv";

  private ScanManager _scanManager;

  private final DataOutput dataOutput = new DataOutput();
  private boolean _defaultKeyStrokeEnabled = true;
  private final CodeType _defaultCodeType = new CodeType();

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Base";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }

  @Override
  protected void onCreate(Bundle savedInstance) {
    super.onCreate(savedInstance);
    setTheme(R.style.AppTheme);
    Log.e("bb log 1", "bb data from scan"  );
    _scanManager = ScanManager.createScanManager(getApplicationContext());
    _defaultCodeType.setDefault();
  }
  @Override
  protected void onDestroy() {
    super.onDestroy();
    _scanManager.releaseScanManager();
  }
  @Override
  protected void onResume() {
    super.onResume();
    _scanManager.unlockScanner();
    configScanner();
    _scanManager.addDataListener(this);
  }

  @Override
  protected void onPause() {
    super.onPause();
    _scanManager.unlockScanner();
    _scanManager.setConfig(_defaultCodeType);
    dataOutput.keyStrokeOutput.enabled = _defaultKeyStrokeEnabled;
    _scanManager.setConfig(dataOutput);
    _scanManager.removeDataListener(this);
  }


  @Override
  public void onDataReceived(DecodeResult decodeResult) {
    String codeType = decodeResult.getCodeType();
    // Acquire the read data.
    String data = decodeResult.getData();
    Log.e("bb log", "bb data from scan" + data );
    Log.e("bb log 2", "bb type of code" + codeType );
    DataScanModule.sendEvent("onDataReceived", data);

  }

  //Prevent to input data as a keyboard, Scanning data is managed using an Event
  private void configScanner(){
    _scanManager.getConfig(dataOutput);
    _defaultKeyStrokeEnabled = dataOutput.keyStrokeOutput.enabled;

    dataOutput.keyStrokeOutput.enabled = false;
    _scanManager.setConfig(dataOutput);
  }


}
