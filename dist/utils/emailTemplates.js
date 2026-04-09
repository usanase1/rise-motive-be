"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplates = void 0;
exports.emailTemplates = {
    // ── Sent to customer after submitting service request ──
    serviceRequestConfirmation: (data) => ({
        subject: `Request Received – ${data.trackingCode} | Rise Motive`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0D2680; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Rise Motive Ltd</h1>
          <p style="color: #B0C8FF; margin: 8px 0 0;">Building Skills. Delivering Solutions.</p>
        </div>

        <div style="padding: 32px 24px; background: #ffffff;">
          <h2 style="color: #0D2680;">
            Hello ${data.customerName}! 
            <img src="https://img.icons8.com/ios-filled/50/0D2680/hand.png" width="24" height="24" style="vertical-align: middle;" alt="hi"/>
          </h2>
          <p style="color: #444; line-height: 1.6;">
            Your service request has been <strong>successfully received</strong>.
            Our team will review it and assign a tasker to you shortly.
          </p>

          <div style="background: #EEF3FF; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
            <p style="margin: 0; color: #555; font-size: 13px;">Your Tracking Code</p>
            <h1 style="color: #0D2680; font-size: 36px; margin: 8px 0; letter-spacing: 4px;">
              ${data.trackingCode}
            </h1>
            <p style="margin: 0; color: #777; font-size: 12px;">
              Save this code to track your request anytime
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Service</td>
              <td style="padding: 10px; font-weight: bold; color: #333;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Description</td>
              <td style="padding: 10px; color: #333;">${data.description}</td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #777; font-size: 13px;">Location</td>
              <td style="padding: 10px; color: #333;">${data.location}</td>
            </tr>
          </table>

          <div style="background: #FFF8ED; border-left: 4px solid #F59E0B; padding: 14px 16px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #7A4A00; font-size: 13px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/F59E0B/smartphone.png" width="20" height="20" alt="sms" />
              <span>You will also receive an <strong>SMS notification</strong> when your tasker is assigned and when your service is completed.</span>
            </p>
          </div>

          <div style="color: #444; line-height: 1.6;">
            Need help? Contact us:<br/>
            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/333333/phone.png" width="16" height="16" alt="phone"/>
              <strong>0795344768 | 0788625873</strong>
            </div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/333333/new-post.png" width="16" height="16" alt="email"/>
              <strong>info@risemotive.com</strong>
            </div>
          </div>
        </div>

        <div style="background: #0D2680; padding: 16px; text-align: center;">
          <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
            © ${new Date().getFullYear()} Rise Motive Ltd | Kigali, Rwanda
          </p>
        </div>
      </div>
    `,
    }),
    // ── Sent to customer when status changes ──
    statusUpdate: (data) => {
        const statusLabels = {
            PENDING: "Pending",
            ASSIGNED: "Tasker Assigned",
            IN_PROGRESS: "In Progress",
            COMPLETED: "Completed",
            CANCELLED: "Cancelled",
        };
        const statusIcons = {
            PENDING: "https://img.icons8.com/ios-filled/50/ffffff/hourglass.png",
            ASSIGNED: "https://img.icons8.com/ios-filled/50/ffffff/user.png",
            IN_PROGRESS: "https://img.icons8.com/ios-filled/50/ffffff/settings.png",
            COMPLETED: "https://img.icons8.com/ios-filled/50/ffffff/checkmark.png",
            CANCELLED: "https://img.icons8.com/ios-filled/50/ffffff/cancel.png",
        };
        const statusColors = {
            PENDING: "#F59E0B",
            ASSIGNED: "#3B82F6",
            IN_PROGRESS: "#8B5CF6",
            COMPLETED: "#22C55E",
            CANCELLED: "#EF4444",
        };
        const iconUrl = statusIcons[data.status] || statusIcons["PENDING"];
        const label = statusLabels[data.status] || data.status;
        return {
            subject: `Update: ${label} – ${data.trackingCode} | Rise Motive`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D2680; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Rise Motive Ltd</h1>
          </div>

          <div style="padding: 32px 24px; background: #ffffff;">
            <h2 style="color: #0D2680;">Hello ${data.customerName}!</h2>
            <p style="color: #444;">Your service request status has been updated.</p>

            <div style="text-align: center; margin: 24px 0;">
              <span style="
                background: ${statusColors[data.status] || "#888"};
                color: white;
                padding: 10px 24px;
                border-radius: 24px;
                font-weight: bold;
                font-size: 16px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
              ">
                <img src="${iconUrl}" width="18" height="18" alt="status" />
                ${label}
              </span>
            </div>

            <div style="background: #f9f9f9; border-radius: 10px; padding: 16px; margin: 16px 0;">
              <p style="margin: 0; color: #555; font-size: 13px;">Tracking Code</p>
              <p style="margin: 4px 0 0; font-weight: bold; color: #0D2680; font-size: 18px;">
                ${data.trackingCode}
              </p>
            </div>

            ${data.note ? `
              <div style="background: #EEF3FF; border-radius: 10px; padding: 14px 16px; margin: 16px 0;">
                <p style="margin: 0; color: #555; font-size: 13px;">Note from team</p>
                <p style="margin: 6px 0 0; color: #333;">${data.note}</p>
              </div>
            ` : ""}

            ${data.taskerName ? `
              <div style="background: #EAF6EF; border-radius: 10px; padding: 14px 16px; margin: 16px 0;">
                <p style="margin: 0; color: #555; font-size: 13px;">Your Assigned Tasker</p>
                <div style="margin-top: 6px; display: flex; align-items: center; gap: 8px;">
                  <img src="https://img.icons8.com/ios-filled/50/0A6B3C/user.png" width="16" height="16" alt="tasker" />
                  <strong style="color: #0A6B3C;">${data.taskerName}</strong>
                </div>
                ${data.taskerPhone ? `
                  <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px;">
                    <img src="https://img.icons8.com/ios-filled/50/0A6B3C/phone.png" width="14" height="14" alt="phone" />
                    <span style="color: #0A6B3C;">${data.taskerPhone}</span>
                  </div>
                ` : ""}
              </div>
            ` : ""}

            ${data.status === "COMPLETED" ? `
              <div style="background: #D1F5E0; border-radius: 10px; padding: 16px; margin: 16px 0; text-align: center;">
                <div style="display: flex; justify-content: center; margin-bottom: 8px;">
                  <img src="https://img.icons8.com/ios-filled/50/0A5C30/party-baloons.png" width="32" height="32" alt="celebrate" />
                </div>
                <p style="margin: 0; color: #0A5C30; font-size: 15px;">
                  <strong>Your service has been completed!</strong><br/>
                  Thank you for choosing Rise Motive Ltd.
                </p>
              </div>
            ` : ""}
          </div>

          <div style="background: #0D2680; padding: 16px; text-align: center;">
            <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} Rise Motive Ltd | Kigali, Rwanda
            </p>
          </div>
        </div>
      `,
        };
    },
    // ── Sent to admin when new service request comes in ──
    newRequestNotification: (data) => ({
        subject: `New Service Request – ${data.trackingCode} | Rise Motive Admin`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0D2680; padding: 24px; text-align: center;">
          <div style="display: flex; justify-content: center; margin-bottom: 12px;">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/bell.png" width="32" height="32" alt="alert" />
          </div>
          <h1 style="color: white; margin: 0;">New Service Request</h1>
          <p style="color: #B0C8FF; margin: 8px 0 0;">Rise Motive Admin Notification</p>
        </div>

        <div style="padding: 24px; background: #ffffff;">
          <div style="background: #EEF3FF; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0; color: #555; font-size: 13px;">Tracking Code</p>
            <h2 style="margin: 4px 0 0; color: #0D2680;">${data.trackingCode}</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px; width: 140px;">Customer</td>
              <td style="padding: 10px; font-weight: bold;">${data.customerName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Phone</td>
              <td style="padding: 10px;">${data.customerPhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Category</td>
              <td style="padding: 10px;">${data.serviceCategory}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Service</td>
              <td style="padding: 10px;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Description</td>
              <td style="padding: 10px;">${data.description}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Location</td>
              <td style="padding: 10px;">${data.location}</td>
            </tr>
            ${data.preferredDate ? `
              <tr>
                <td style="padding: 10px; color: #777; font-size: 13px;">Preferred Date</td>
                <td style="padding: 10px;">${data.preferredDate}</td>
              </tr>
            ` : ""}
          </table>

          <div style="margin-top: 24px; text-align: center;">
            <p style="color: #555; font-size: 13px;">
              Login to the admin panel to assign a tasker and update the status.
            </p>
          </div>
        </div>

        <div style="background: #0D2680; padding: 16px; text-align: center;">
          <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
            © ${new Date().getFullYear()} Rise Motive Ltd | Admin System
          </p>
        </div>
      </div>
    `,
    }),
    // ── Sent to admin when new order comes in ──
    newOrderNotification: (data) => ({
        subject: `New Order – ${data.trackingCode} | Rise Motive Admin`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0D2680; padding: 24px; text-align: center;">
          <div style="display: flex; justify-content: center; margin-bottom: 12px;">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" width="32" height="32" alt="cart" />
          </div>
          <h1 style="color: white; margin: 0;">New Product Order</h1>
          <p style="color: #B0C8FF; margin: 8px 0 0;">Rise Motive Admin Notification</p>
        </div>

        <div style="padding: 24px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px; width: 140px;">Order Code</td>
              <td style="padding: 10px; font-weight: bold; color: #0D2680;">${data.trackingCode}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Customer</td>
              <td style="padding: 10px; font-weight: bold;">${data.customerName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Phone</td>
              <td style="padding: 10px;">${data.customerPhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Product</td>
              <td style="padding: 10px;">${data.productName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Quantity</td>
              <td style="padding: 10px;">${data.quantity}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; color: #777; font-size: 13px;">Delivery Address</td>
              <td style="padding: 10px;">${data.address}</td>
            </tr>
            ${data.note ? `
              <tr>
                <td style="padding: 10px; color: #777; font-size: 13px;">Note</td>
                <td style="padding: 10px;">${data.note}</td>
              </tr>
            ` : ""}
          </table>
          <div style="margin-top: 20px; background: #FFF8ED; border-radius: 10px; padding: 14px; display: flex; align-items: flex-start; gap: 12px;">
            <img src="https://img.icons8.com/ios-filled/50/7A4A00/bank-cards.png" width="24" height="24" alt="card" style="flex-shrink: 0;" />
            <p style="margin: 0; color: #7A4A00; font-size: 13px; text-align: left;">
              Payment will be confirmed via <strong>phone or VISA</strong> with the customer.
            </p>
          </div>
        </div>

        <div style="background: #0D2680; padding: 16px; text-align: center;">
          <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
            © ${new Date().getFullYear()} Rise Motive Ltd | Admin System
          </p>
        </div>
      </div>
    `,
    }),
    // ── Sent to new staff when registered ──
    welcomeStaff: (data) => ({
        subject: `Welcome to Rise Motive – Your Account is Ready`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0D2680; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0;">Welcome to Rise Motive!</h1>
        </div>

        <div style="padding: 32px 24px; background: #ffffff;">
          <h2 style="color: #0D2680;">
            Hello ${data.fullName}! 
            <img src="https://img.icons8.com/ios-filled/50/0D2680/hand.png" width="24" height="24" style="vertical-align: middle;" alt="hi"/>
          </h2>
          <p style="color: #444; line-height: 1.6;">
            Your <strong>${data.role}</strong> account has been created on the
            Rise Motive platform. Here are your login credentials:
          </p>

          <div style="background: #EEF3FF; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <table style="width: 100%;">
              <tr>
                <td style="color: #555; font-size: 13px; padding: 6px 0;">Email</td>
                <td style="font-weight: bold; color: #0D2680;">${data.email}</td>
              </tr>
              <tr>
                <td style="color: #555; font-size: 13px; padding: 6px 0;">Password</td>
                <td style="font-weight: bold; color: #0D2680;">${data.password}</td>
              </tr>
            </table>
            
            ${data.otpCode ? `
            <div style="margin-top: 16px; border-top: 1px solid #ccc; padding-top: 16px; text-align: center;">
              <p style="margin: 0; color: #555; font-size: 13px;">Your Email Verification Code</p>
              <h1 style="color: #0D2680; font-size: 32px; letter-spacing: 4px; margin: 8px 0;">${data.otpCode}</h1>
              <p style="margin: 0; color: #777; font-size: 12px;">You must enter this code to verify your email before your first login. It expires in 15 minutes.</p>
            </div>
            ` : ""}
          </div>

          <div style="background: #FFF8ED; border-left: 4px solid #F59E0B; padding: 14px 16px; border-radius: 4px; display: flex; align-items: flex-start; gap: 12px;">
            <img src="https://img.icons8.com/ios-filled/50/F59E0B/warning-shield.png" width="20" height="20" alt="warning" style="flex-shrink: 0;" />
            <p style="margin: 0; color: #7A4A00; font-size: 13px;">
              <strong>Please change your password</strong> after your first login for security.
            </p>
          </div>

          <div style="color: #444; margin-top: 24px; line-height: 1.6;">
            For support contact:<br/>
            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/333333/phone.png" width="16" height="16" alt="phone"/>
              <strong>0795344768</strong>
            </div>
          </div>
        </div>

        <div style="background: #0D2680; padding: 16px; text-align: center;">
          <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Rise Motive Ltd | Kigali, Rwanda
          </p>
        </div>
      </div>
    `,
    }),
    passwordChangeNotification: (data) => ({
        subject: `Password Changed Successfully | Rise Motive Security Alert`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0D2680; padding: 24px; text-align: center;">
          <div style="display: flex; justify-content: center; margin-bottom: 12px;">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/shield.png" width="32" height="32" alt="shield" />
          </div>
          <h1 style="color: white; margin: 0;">Password Changed</h1>
          <p style="color: #B0C8FF; margin: 8px 0 0;">Security Notification</p>
        </div>

        <div style="padding: 32px 24px; background: #ffffff;">
          <h2 style="color: #0D2680;">
            Hello ${data.fullName}! 
            <img src="https://img.icons8.com/ios-filled/50/0D2680/hand.png" width="24" height="24" style="vertical-align: middle;" alt="hi"/>
          </h2>
          
          <div style="background: #D1F5E0; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
            <div style="display: flex; justify-content: center; margin-bottom: 12px;">
              <img src="https://img.icons8.com/ios-filled/50/0A5C30/key.png" width="32" height="32" alt="key" />
            </div>
            <h3 style="color: #0A5C30; margin: 0 0 8px;">Your Password Has Been Changed</h3>
            <p style="color: #0A5C30; margin: 0; font-size: 14px;">
              This action was completed successfully on ${new Date().toLocaleDateString()}
            </p>
          </div>

          <p style="color: #444; line-height: 1.6;">
            Your account password has been <strong>successfully updated</strong>. 
            This change ensures your account remains secure.
          </p>

          <div style="background: #FFF8ED; border-left: 4px solid #F59E0B; padding: 14px 16px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #7A4A00; font-size: 13px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/F59E0B/info.png" width="20" height="20" alt="info" />
              <span>If you didn't make this change, please contact us immediately at <strong>0795344768</strong>.</span>
            </p>
          </div>

          <div style="color: #444; line-height: 1.6;">
            For support contact:<br/>
            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/333333/phone.png" width="16" height="16" alt="phone"/>
              <strong>0795344768 | 0788625873</strong>
            </div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px;">
              <img src="https://img.icons8.com/ios-filled/50/333333/new-post.png" width="16" height="16" alt="email"/>
              <strong>info@risemotive.com</strong>
            </div>
          </div>
        </div>

        <div style="background: #0D2680; padding: 16px; text-align: center;">
          <p style="color: #B0C8FF; margin: 0; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Rise Motive Ltd | Kigali, Rwanda
          </p>
        </div>
      </div>
    `,
    }),
};
