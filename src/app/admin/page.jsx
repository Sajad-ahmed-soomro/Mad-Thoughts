import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPost from "@/components/adminPost/adminPost";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation';

const AdminPage = async () => {
  const session = await auth();

  // If the session does not exist, redirect to the login page or handle it appropriately
  if (!session || !session.user) {
    redirect('/login'); // You can change the path to your login page
    return null; // Return null to prevent rendering the rest of the component
  }
  console.log(session.user.id);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
