package com.tesis;

import com.facebook.react.ReactActivity;

//Modificaciones para la instalacion del controlador de gestos
/*se importal las sgtes 3 lineas*/
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Tesis";
    }

    /*se agrega el sgte bloque de 9 lineas*/
    @Override
  	protected ReactActivityDelegate createReactActivityDelegate() {
    	return new ReactActivityDelegate(this, getMainComponentName()) {
      		@Override
      		protected ReactRootView createRootView() {
       			return new RNGestureHandlerEnabledRootView(MainActivity.this);
      		}
    	};
  	}

}
