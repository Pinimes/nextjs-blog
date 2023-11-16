import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

const NAME = "Peniel Mesele";

export default function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={244}
            width={244}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
        </>
      </header>
    </Layout>
  );
}
