import { memo } from "react";
import { SlideManagementProps } from "./types";
import useSlideManagementHook from "./slide-management.hook";
import styles from "./slide-management.styles.module.css";

function SlideManagement(props: SlideManagementProps) {
  const { className = "", style } = props;
  const { handlers } = useSlideManagementHook();

  return (
    <div
      id={props.id}
      className={(styles.container + " " + (className || "")).trim()}
      style={style}
      onClick={handlers.onClick}
    >
      <div className={styles.topPane}>0</div>
      <div className={styles.primaryPane}>1</div>
      <div className={styles.secondaryPane}>2</div>
      <div className={styles.bottomPane}>3</div>
    </div>
  );
}

export default memo(SlideManagement);
