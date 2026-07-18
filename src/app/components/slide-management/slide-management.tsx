import { memo } from "react";
import { SlideManagementProps } from "./types";
import useSlideManagementHook from "./slide-management.hook";
import styles from "./slide-management.styles.module.css";
import { Button, Result } from "antd";

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
      <div className={styles.primaryPane}>
        {
          <Result
            title="Não há apresentação selecionada!"
            subTitle="Clique no botão abrir e escolha uma apresentação para habilitar o modo apresentador"
            extra={<Button type="primary">Abrir</Button>}
          />
        }
      </div>
      <div className={styles.secondaryPane}>2</div>
      <div className={styles.bottomPane}>3</div>
    </div>
  );
}

export default memo(SlideManagement);
