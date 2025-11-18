# Dance-Go 🕺💃

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Platform](https://img.shields.io/badge/platform-web-orange.svg)

**Sistem Peminjaman Fasilitas Dance Pad Fakultas Ilmu Komputer UB**

*Project Akhir Semester 3*

[Fitur](#fitur) • [Instalasi](#instalasi) • [Penggunaan](#penggunaan) • [Dokumentasi](#dokumentasi) • [Kontribusi](#kontribusi)

</div>

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Penggunaan](#penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [API Dokumentasi](#api-dokumentasi)
- [Screenshot](#screenshot)
- [Testing](#testing)
- [Deployment](#deployment)
- [FAQ](#faq)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Tim Pengembang](#tim-pengembang)

---

## 🎯 Tentang Proyek

**Dance-Go** adalah aplikasi web berbasis sistem peminjaman fasilitas dance pad yang tersedia di Fakultas Ilmu Komputer Universitas Brawijaya. Aplikasi ini dikembangkan sebagai project akhir semester 3 untuk memudahkan mahasiswa dalam melakukan reservasi dan penggunaan fasilitas dance pad secara terorganisir.

### Latar Belakang

Fasilitas dance pad di Fakultas Ilmu Komputer UB sering kali mengalami kesulitan dalam manajemen peminjaman. Seringkali terjadi konflik jadwal atau ketidakjelasan ketersediaan fasilitas. Dance-Go hadir sebagai solusi untuk:

- 📅 Mengelola jadwal peminjaman secara sistematis
- ⏰ Memungkinkan peminjaman untuk beberapa jam ke depan
- 🎮 Bermain langsung jika tidak ada peminjam pada waktu tersebut
- 👨‍💼 Memudahkan admin dalam mengelola fasilitas

### Tujuan Aplikasi

- Meningkatkan efisiensi penggunaan fasilitas dance pad
- Menghindari konflik jadwal antar pengguna
- Memberikan transparansi ketersediaan fasilitas
- Memudahkan monitoring dan pelaporan penggunaan fasilitas

---

## ✨ Fitur

### 🎯 Fitur Pengguna (User)

#### 1. **Peminjaman Jadwal**
- 📅 **Reservasi Terjadwal**: Peminjaman fasilitas untuk beberapa jam ke depan
- ⏱️ **Durasi Fleksibel**: Pilih durasi peminjaman sesuai kebutuhan (30 menit, 1 jam, 2 jam, dll.)
- 📋 **Melihat Jadwal**: Cek ketersediaan fasilitas secara real-time
- ✅ **Konfirmasi Otomatis**: Notifikasi instant setelah peminjaman berhasil

#### 2. **Main Langsung (Walk-in)**
- 🎮 **Play Now**: Bermain langsung jika jadwal kosong
- ⚡ **Quick Access**: Tanpa perlu reservasi jika tidak ada peminjam
- ⏲️ **Real-time Check**: Pengecekan otomatis ketersediaan fasilitas

#### 3. **Manajemen Booking**
- 📝 **Riwayat Peminjaman**: Lihat history booking pribadi
- ❌ **Batalkan Booking**: Cancel reservasi jika ada perubahan rencana
- 🔔 **Notifikasi**: Pengingat sebelum waktu peminjaman tiba

### 👨‍💼 Fitur Admin

#### 1. **Manajemen Jadwal**
- 🗑️ **Hapus Jadwal**: Menghapus booking yang bermasalah atau tidak valid
- ✏️ **Edit Jadwal**: Modifikasi detail peminjaman
- 📊 **Overview Dashboard**: Melihat semua jadwal dalam satu tampilan

#### 2. **Log & Rekap**
- 📈 **Rekap Peminjaman**: Statistik penggunaan fasilitas
- 📋 **Log Aktivitas**: Catatan lengkap semua transaksi peminjaman
- 📊 **Laporan Berkala**: Generate laporan harian/mingguan/bulanan
- 📉 **Analisis Penggunaan**: Insight tentang peak hours dan pattern penggunaan

#### 3. **Kontrol Fasilitas**
- 🔴 **Matikan Fasilitas**: Disable sistem untuk maintenance
- 🟢 **Hidupkan Fasilitas**: Enable kembali setelah maintenance
- ⚙️ **Status Management**: Update status operasional fasilitas
- 🔧 **Maintenance Mode**: Mode khusus untuk perbaikan/pemeliharaan

#### 4. **Manajemen Pengguna**
- 👥 **Daftar Pengguna**: Kelola data pengguna sistem
- 🔒 **Role Management**: Atur hak akses user dan admin
- 📧 **Komunikasi**: Kirim notifikasi atau pengumuman ke pengguna

---

## 🛠️ Teknologi yang Digunakan

### Frontend

```
- Framework: React.js / Vue.js / Next.js
- Styling: Tailwind CSS / Material-UI / Bootstrap
- State Management: Redux / Context API / Zustand
- HTTP Client: Axios / Fetch API
- Form Handling: React Hook Form / Formik
- Date Picker: React DatePicker
- Charts: Chart.js / Recharts
```

### Backend

```
- Runtime: Node.js / Python / PHP
- Framework: Express.js / Django / Laravel
- Database: MySQL / PostgreSQL / MongoDB
- ORM: Sequelize / Prisma / TypeORM
- Authentication: JWT / Passport.js / OAuth
- Validation: Joi / Yup / Express Validator
```

### Tools & Infrastructure

```
- Version Control: Git & GitHub
- Package Manager: npm / yarn / pnpm
- API Testing: Postman / Thunder Client
- Code Editor: VS Code
- Documentation: Swagger / Postman Docs
```

### Additional Libraries

```
- moment.js / date-fns: Date manipulation
- nodemailer: Email notifications
- socket.io: Real-time updates
- bcrypt: Password hashing
- dotenv: Environment variables
```

---

## 📦 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

### Software Requirements

- **Node.js** (v16.0 atau lebih tinggi)
  ```bash
  node --version
  ```

- **npm** atau **yarn** (latest version)
  ```bash
  npm --version
  # atau
  yarn --version
  ```

- **Database** (MySQL/PostgreSQL/MongoDB)
  - MySQL 8.0+ / PostgreSQL 12+ / MongoDB 4.4+

- **Git**
  ```bash
  git --version
  ```

### System Requirements

- **OS**: Windows 10+, macOS 10.14+, atau Linux (Ubuntu 18.04+)
- **RAM**: Minimal 4GB (disarankan 8GB)
- **Storage**: 1GB ruang kosong
- **Browser**: Chrome/Firefox/Safari (versi terbaru)

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/AqeelaSahla/dance-go.git
cd dance-go
```

### 2. Install Dependencies

#### Untuk Frontend

```bash
cd frontend
npm install
# atau
yarn install
```

#### Untuk Backend

```bash
cd backend
npm install
# atau
yarn install
```

### 3. Setup Database

#### Untuk MySQL/PostgreSQL

```bash
# Buat database baru
mysql -u root -p

# Di MySQL shell
CREATE DATABASE dance_go;
USE dance_go;

# Import schema (jika ada file SQL)
SOURCE database/schema.sql;
```

#### Untuk MongoDB

```bash
# Mulai MongoDB service
mongod

# Buat database akan otomatis saat aplikasi dijalankan
```

### 4. Konfigurasi Environment Variables

Buat file `.env` di folder `backend`:

```env
# Application Configuration
NODE_ENV=development
PORT=5000
APP_NAME=Dance-Go
APP_URL=http://localhost:3000

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=dance_go
DB_USER=root
DB_PASSWORD=your_password
DB_DIALECT=mysql

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@dancego.com

# Dance Pad Configuration
MAX_BOOKING_HOURS=4
MIN_BOOKING_DURATION=30
MAX_ADVANCE_BOOKING_DAYS=7
FACILITY_OPEN_HOUR=08:00
FACILITY_CLOSE_HOUR=21:00

# Admin Configuration
ADMIN_EMAIL=admin@dancego.com
ADMIN_PASSWORD=admin123

# Session Configuration
SESSION_SECRET=your_session_secret_key
SESSION_EXPIRE=24h

# File Upload
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg

# Timezone
TZ=Asia/Jakarta
```

Buat file `.env` di folder `frontend`:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Dance-Go
REACT_APP_ENVIRONMENT=development
```

### 5. Migrasi Database

```bash
cd backend

# Jalankan migrations
npm run migrate

# Seed database dengan data dummy (opsional)
npm run seed
```

### 6. Jalankan Aplikasi

#### Development Mode

Terminal 1 (Backend):
```bash
cd backend
npm run dev
# Server akan berjalan di http://localhost:5000
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
# Aplikasi akan buka di http://localhost:3000
```

#### Production Mode

```bash
# Build frontend
cd frontend
npm run build

# Jalankan backend
cd backend
npm start
```

---

## ⚙️ Konfigurasi

### Pengaturan Fasilitas

Edit file `config/facility.config.js`:

```javascript
module.exports = {
  // Jam operasional
  operatingHours: {
    start: '08:00',
    end: '21:00',
    timezone: 'Asia/Jakarta'
  },
  
  // Pengaturan booking
  booking: {
    minDuration: 30,        // menit
    maxDuration: 240,       // menit (4 jam)
    advanceBookingDays: 7,  // hari ke depan
    intervalMinutes: 30     // interval waktu booking
  },
  
  // Hari libur
  holidays: [
    '2025-01-01',  // Tahun Baru
    '2025-12-25',  // Natal
    // tambahkan hari libur lainnya
  ],
  
  // Auto-cancel booking jika terlambat (menit)
  autoCancelDelay: 15
};
```

### Pengaturan Notifikasi

Edit file `config/notification.config.js`:

```javascript
module.exports = {
  // Email notifications
  email: {
    enabled: true,
    templates: {
      bookingConfirmation: 'booking_confirmation.html',
      bookingReminder: 'booking_reminder.html',
      bookingCancellation: 'booking_cancellation.html'
    }
  },
  
  // Reminder sebelum waktu booking (menit)
  reminderTime: 30,
  
  // Push notifications
  push: {
    enabled: false
  }
};
```

---

## 💻 Penggunaan

### Untuk Pengguna (User)

#### 1. Registrasi & Login

```
1. Buka aplikasi di browser: http://localhost:3000
2. Klik "Daftar" untuk membuat akun baru
3. Isi data: Nama, NIM, Email, Password
4. Verifikasi email (jika enabled)
5. Login dengan kredensial yang telah dibuat
```

#### 2. Melihat Ketersediaan Jadwal

```
1. Di halaman utama, pilih tanggal yang diinginkan
2. Sistem akan menampilkan slot waktu yang tersedia (hijau)
   dan terisi (merah)
3. Lihat detail booking dengan klik pada slot yang terisi
```

#### 3. Membuat Booking Baru

```
1. Pilih tanggal dan waktu yang tersedia
2. Pilih durasi peminjaman (30 menit, 1 jam, 2 jam, dll.)
3. Tambahkan catatan jika diperlukan
4. Klik "Booking"
5. Konfirmasi booking Anda
6. Terima notifikasi konfirmasi via email
```

#### 4. Main Langsung (Walk-in)

```
1. Di halaman utama, cek status "Play Now"
2. Jika status hijau (Available), klik "Main Sekarang"
3. Sistem akan otomatis membuat sesi bermain
4. Nikmati permainan Anda!
```

#### 5. Mengelola Booking Anda

```
# Melihat Booking Aktif
- Buka menu "My Bookings"
- Lihat daftar booking yang akan datang

# Membatalkan Booking
- Klik pada booking yang ingin dibatalkan
- Pilih "Cancel Booking"
- Konfirmasi pembatalan

# Riwayat Booking
- Buka menu "History"
- Lihat semua booking sebelumnya
```

### Untuk Admin

#### 1. Login Admin

```
Email: admin@dancego.com
Password: admin123

Atau gunakan kredensial yang telah dikonfigurasi
```

#### 2. Dashboard Admin

```
Dashboard menampilkan:
- Total booking hari ini
- Fasilitas yang sedang digunakan
- Statistik penggunaan
- Upcoming bookings
- Status fasilitas
```

#### 3. Mengelola Jadwal

```bash
# Melihat Semua Jadwal
Menu: Schedule Management > All Bookings

# Menghapus Booking
1. Pilih booking yang ingin dihapus
2. Klik icon trash/delete
3. Konfirmasi penghapusan
4. Opsional: kirim notifikasi ke user

# Edit Booking
1. Pilih booking yang ingin diedit
2. Klik icon edit
3. Ubah detail (waktu, durasi, dll.)
4. Simpan perubahan
```

#### 4. Melihat Log & Rekap

```bash
# Log Aktivitas
Menu: Reports > Activity Log

Filter berdasarkan:
- Tanggal
- User
- Tipe aktivitas (booking, cancel, walk-in)
- Status

# Rekap Statistik
Menu: Reports > Statistics

Tersedia:
- Daily report: Penggunaan harian
- Weekly report: Tren mingguan
- Monthly report: Analisis bulanan
- Custom range: Pilih rentang tanggal sendiri

# Export Data
- Format: Excel, PDF, CSV
- Pilih periode dan klik "Export"
```

#### 5. Kontrol Fasilitas

```bash
# Mematikan Fasilitas
Menu: Facility Control > Disable Facility

1. Klik "Disable Facility"
2. Pilih alasan (Maintenance, Repair, Event)
3. Tentukan durasi disable
4. Konfirmasi
5. Sistem akan membatalkan semua booking yang terkena dampak

# Menghidupkan Fasilitas
Menu: Facility Control > Enable Facility

1. Klik "Enable Facility"
2. Konfirmasi aktivasi
3. Fasilitas kembali dapat dibooking

# Status Fasilitas
- 🟢 Online: Fasilitas tersedia dan dapat dibooking
- 🟡 Busy: Sedang digunakan
- 🔴 Offline: Tidak tersedia (maintenance/disabled)
- 🔵 Maintenance: Dalam perbaikan terjadwal
```

#### 6. Manajemen Pengguna

```bash
# Melihat Daftar User
Menu: User Management > All Users

# Informasi yang ditampilkan:
- Nama lengkap
- NIM
- Email
- Total bookings
- Status akun
- Last login

# Aksi yang dapat dilakukan:
- View detail user
- Edit user data
- Suspend user (nonaktifkan sementara)
- Delete user
- Reset password
- Send notification
```

#### 7. Pengaturan Sistem

```bash
Menu: Settings

Konfigurasi:
- Operating hours: Atur jam buka/tutup
- Booking rules: Min/max durasi, advance booking
- Notification settings: Email, push notifications
- Holiday calendar: Atur hari libur
- Maintenance schedule: Jadwal maintenance rutin
```

---

## 📁 Struktur Proyek

```
dance-go/
│
├── frontend/                          # Frontend application
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   │       ├── images/
│   │       └── icons/
│   │
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   ├── booking/
│   │   │   │   ├── BookingCard.jsx
│   │   │   │   ├── BookingForm.jsx
│   │   │   │   ├── ScheduleCalendar.jsx
│   │   │   │   └── TimeSlot.jsx
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── BookingTable.jsx
│   │   │       ├── StatisticsChart.jsx
│   │   │       └── FacilityControl.jsx
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ManageBookings.jsx
│   │   │       ├── Reports.jsx
│   │   │       ├── FacilityManagement.jsx
│   │   │       └── UserManagement.jsx
│   │   │
│   │   ├── services/                 # API services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── bookingService.js
│   │   │   ├── adminService.js
│   │   │   └── facilityService.js
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useBooking.js
│   │   │   └── useFacility.js
│   │   │
│   │   ├── context/                  # React Context
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookingContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   ├── dateFormatter.js
│   │   │   ├── validators.js
│   │   │   └── constants.js
│   │   │
│   │   ├── styles/                   # CSS/Styling
│   │   │   ├── globals.css
│   │   │   ├── components.css
│   │   │   └── tailwind.css
│   │   │
│   │   ├── App.jsx                   # Main App component
│   │   ├── index.js                  # Entry point
│   │   └── routes.js                 # Route configuration
│   │
│   ├── package.json
│   └── README.md
│
├── backend/                           # Backend application
│   ├── src/
│   │   ├── controllers/              # Request handlers
│   │   │   ├── authController.js
│   │   │   ├── bookingController.js
│   │   │   ├── adminController.js
│   │   │   ├── facilityController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── models/                   # Database models
│   │   │   ├── User.js
│   │   │   ├── Booking.js
│   │   │   ├── Facility.js
│   │   │   ├── Log.js
│   │   │   └── index.js
│   │   │
│   │   ├── routes/                   # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── booking.routes.js
│   │   │   ├── admin.routes.js
│   │   │   ├── facility.routes.js
│   │   │   └── index.js
│   │   │
│   │   ├── middleware/               # Middlewares
│   │   │   ├── auth.middleware.js
│   │   │   ├── admin.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── rateLimit.middleware.js
│   │   │
│   │   ├── services/                 # Business logic
│   │   │   ├── bookingService.js
│   │   │   ├── emailService.js
│   │   │   ├── notificationService.js
│   │   │   └── reportService.js
│   │   │
│   │   ├── utils/                    # Utilities
│   │   │   ├── database.js
│   │   │   ├── logger.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── config/                   # Configuration
│   │   │   ├── database.config.js
│   │   │   ├── facility.config.js
│   │   │   ├── email.config.js
│   │   │   └── app.config.js
│   │   │
│   │   └── app.js                    # Express app setup
│   │
│   ├── database/
│   │   ├── migrations/               # Database migrations
│   │   ├── seeders/                  # Seed data
│   │   └── schema.sql                # Database schema
│   │
│   ├── tests/                        # Test files
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   │
│   ├── logs/                         # Application logs
│   │   ├── error.log
│   │   └── combined.log
│   │
│   ├── uploads/                      # Uploaded files
│   │
│   ├── .env.example
│   ├── package.json
│   ├── server.js                     # Server entry point
│   └── README.md
│
├── docs/                              # Documentation
│   ├── API.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   ├── USER_GUIDE.md
│   └── ADMIN_GUIDE.md
│
├── .github/                           # GitHub configuration
│   └── workflows/
│       └── ci.yml
│
├── .gitignore
├── docker-compose.yml
├── LICENSE
└── README.md
```

---

## 📚 API Dokumentasi

### Base URL

```
Development: http://localhost:5000/api
Production: https://api.dancego.filkom.ub.ac.id/api
```

### Authentication

Semua endpoint yang memerlukan autentikasi harus menyertakan token JWT di header:

```http
Authorization: Bearer <your_jwt_token>
```

---

### 🔐 Auth Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "nim": "215150200111001",
  "email": "john.doe@student.ub.ac.id",
  "password": "password123",
  "confirmPassword": "password123",
  "phone": "08123456789"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registrasi berhasil",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@student.ub.ac.id",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john.doe@student.ub.ac.id",
  "password": "password123"
}
```

#### Logout

```http
POST /api/auth/logout
Authorization: Bearer <token>
```

#### Get Current User

```http
GET /api/auth/me
Authorization: Bearer <token>
```

---

### 📅 Booking Endpoints

#### Get Available Slots

```http
GET /api/bookings/available?date=2025-11-20
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "date": "2025-11-20",
    "slots": [
      {
        "time": "08:00",
        "available": true,
        "duration": 30
      },
      {
        "time": "08:30",
        "available": false,
        "bookedBy": "Jane Doe"
      }
    ]
  }
}
```

#### Create Booking

```http
POST /api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2025-11-20",
  "startTime": "14:00",
  "duration": 60,
  "notes": "Latihan untuk lomba"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking berhasil dibuat",
  "data": {
    "id": 123,
    "date": "2025-11-20",
    "startTime": "14:00",
    "endTime": "15:00",
    "status": "confirmed",
    "bookingCode": "DG-20251120-123"
  }
}
```

#### Get User Bookings

```http
GET /api/bookings/my-bookings?status=active&page=1&limit=10
Authorization: Bearer <token>
```

#### Cancel Booking

```http
DELETE /api/bookings/:id
Authorization: Bearer <token>
```

#### Play Now (Walk-in)

```http
POST /api/bookings/play-now
Authorization: Bearer <token>
Content-Type: application/json

{
  "duration": 30
}
```

---

### 👨‍💼 Admin Endpoints

#### Get All Bookings

```http
GET /api/admin/bookings?date=2025-11-20&status=all
Authorization: Bearer <admin_token>
```

#### Delete Booking (Admin)

```http
DELETE /api/admin/bookings/:id
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "reason": "Konflik jadwal"
}
```

#### Get Activity Log

```http
GET /api/admin/logs?startDate=2025-11-01&endDate=2025-11-30&type=all
Authorization: Bearer <admin_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": 1,
        "userId": 5,
        "userName": "John Doe",
        "action": "create_booking",
        "details": "Booking created for 2025-11-20 14:00",
        "timestamp": "2025-11-18T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150
    }
  }
}
```

#### Get Statistics

```http
GET /api/admin/statistics?period=weekly
Authorization: Bearer <admin_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalBookings": 45,
    "activeBookings": 12,
    "completedBookings": 30,
    "cancelledBookings": 3,
    "averageDuration": 75,
    "peakHours": ["14:00", "15:00", "16:00"],
    "popularDays": ["Monday", "Wednesday", "Friday"]
  }
}
```

#### Control Facility

```http
POST /api/admin/facility/toggle
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "status": "offline",
  "reason": "Maintenance",
  "duration": 120
}
```

#### Export Report

```http
GET /api/admin/
