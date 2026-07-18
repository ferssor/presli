import { memo } from 'react';
import { SlideManagementProps } from './types';
import useSlideManagementHook from './slide-management.hook';
import styles from './slide-management.styles.module.css';

function SlideManagement(props: SlideManagementProps) {
  const { className = '', style, children } = props;
  const { t, state, handlers } = useSlideManagementHook();

  return (
    <div
      id={props.id}
      className={(styles.container + ' ' + (className || '')).trim()}
      style={style}
      onClick={handlers.onClick}
    >
      <h2 className={styles.title}>{t('title')}</h2>
      {state.showContent && children}
    </div>
  );
}

export default memo(SlideManagement);
