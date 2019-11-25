package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Build;
import android.os.Bundle;
import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }

        @Nullable  
        @Override  
        protected Bundle getLaunchOptions() {  
            Bundle bundle = new Bundle();  
            bundle.putInt("Android_SDK_INT", Build.VERSION.SDK_INT);  
            return bundle;  
        }  
      };
  }
}
