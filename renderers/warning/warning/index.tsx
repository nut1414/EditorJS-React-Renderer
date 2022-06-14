/** Warning Component
  *
  * Component to display warning messages to client
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  */

//#region imports
import React from 'react';
import warningStyle from './style';
//#endregion

const Warning = ({ title, message, classNames, customStyle={}, config }: any) => {
  const containerStyle = config.disableDefaultStyle ? customStyle.container : { ...warningStyle.container, ...customStyle.container };
  const iconStyle = config.disableDefaultStyle ? customStyle.icon : { ...warningStyle.icon, ...customStyle.icon };
  const titleStyle = config.disableDefaultStyle ? customStyle.title : { ...warningStyle.title, ...customStyle.title };
  const messageStyle = config.disableDefaultStyle ? customStyle.message : { ...warningStyle.message, ...customStyle.message };

  return (
    <div style={ containerStyle } className={ classNames.container }>
      <svg style={ iconStyle } className={ classNames.icon } version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px' y='0px' viewBox='0 0 50 50' xmlSpace='preserve'>
        <circle style={ warningStyle.circle as any } cx='25' cy='25' r='25'/>
        <line style={ warningStyle.line as any } x1='25' y1='10' x2='25' y2='28'/>
        <line style={ warningStyle.line as any } x1='25' y1='37' x2='25' y2='39'/>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
      </svg>
      <p style={ titleStyle } className={ classNames.title }>{ title }:</p>
      <p style={ messageStyle } className={ classNames.message }>{ message }</p>
    </div>
  );
};

export default Warning;
