// const API_URL = 'https://script.google.com/macros/s/AKfycbwb7SuSZszPyorEu8106QfEylzNs7EZyFWhQ2qANJXDamkL2MSCkALTIgqsRZoiD2c/exec';
// const postIdInput = document.getElementById('post-username');
// const searchParams = new URLSearchParams(window.location.search);

// const SUPABASE_URL = 'https://yzegultmfbdwunocrraf.supabase.co';
// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6ZWd1bHRtZmJkd3Vub2NycmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MjYwODksImV4cCI6MjA4NTMwMjA4OX0.UAri00e0ZwsGRVx_-ONmG93c_51c7oHaZOcT49N0D5E';

// // Bootstrap form validation
// // (function () {
// //     'use strict';

// //     var forms = document.querySelectorAll('.needs-validation');
// //     Array.prototype.slice.call(forms)
// //         .forEach(function (form) {
// //             form.addEventListener('submit', function (event) {
// //                 if (!form.checkValidity()) {
// //                     event.preventDefault();
// //                     event.stopPropagation();
// //                 } else {
// //                     event.preventDefault(); // Prevent default form submission


// //                     Swal.fire({
// //                         title: 'ส่งข้อมูล...',
// //                         text: 'กรุณารอสักครู่กำลังส่งข้อมูลของคุณ.',
// //                         allowOutsideClick: false,
// //                         didOpen: () => {
// //                             Swal.showLoading();
// //                         }
// //                     });

// //                     // Create an Object
// //                     const postData = {};

// //                     // Add Properties
// //                     postData.name = postIdInput.value;
// //                     postData.type = document.getElementById('type').value;
// //                     postData.speed = document.querySelector('input[name="speed"]:checked').value;
// //                     postData.accuracy = document.querySelector('input[name="accuracy"]:checked').value;
// //                     postData.service = document.querySelector('input[name="service"]:checked').value;
// //                     postData.comment = document.getElementById('comment').value;

// //                     // ฟังก์ชันเพื่อส่งข้อมูล
// //                     // axios.post(API_URL, JSON.stringify(postData), {
// //                     //     headers: {
// //                     //         "Content-Type": "application/x-www-form-urlencoded"
// //                     //     }
// //                     // })
// //                     //     .then(response => {
// //                     //         //console.log('POST Response:', response.data.status);
// //                     //         Swal.fire({
// //                     //             title: 'บันทึกข้อมูลสำเร็จ!',
// //                     //             text: 'ข้อมูลผลประเมินได้ถูกส่งเรียบร้อยแล้ว ขอบคุณที่ประเมิน.',
// //                     //             icon: 'success',
// //                     //             confirmButtonText: 'OK'
// //                     //           });
// //                     //           document.getElementById("dataForm").reset();
// //                     //     })

// //                     axios.post(`${SUPABASE_URL}/rest/v1/evaluation_results`, dataToSupabase, {
// //                         headers: {
// //                             "apikey": SUPABASE_KEY,
// //                             "Authorization": `Bearer ${SUPABASE_KEY}`,
// //                             "Content-Type": "application/json",
// //                             "Prefer": "return=minimal"
// //                         }
// //                     })
// //                         .then(response => {
// //                             Swal.fire({
// //                                 title: 'บันทึกข้อมูลสำเร็จ!',
// //                                 text: 'ข้อมูลผลประเมินได้ถูกส่งเรียบร้อยแล้ว ขอบคุณที่ประเมิน.',
// //                                 icon: 'success',
// //                                 confirmButtonText: 'OK'
// //                             });
// //                             document.getElementById("dataForm").reset();
// //                         })

// //                         .catch (error => {
// //                                 //console.error('POST Error:', error);
// //                                 Swal.fire({
// //                                     title: 'Error!',
// //                                     text: error,
// //                                     icon: 'error',
// //                                     confirmButtonText: 'OK'
// //                                 });
// //                             });

// //                 }

// //                 form.classList.add('was-validated');
// //             }, false);
// //         });

// //     fetchData();
// // })();

// (function () {
//     'use strict';
//     var forms = document.querySelectorAll('.needs-validation');
//     Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//             if (!form.checkValidity()) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             } else {
//                 event.preventDefault();

//                 // *** ย้ายมาประกาศตรงนี้เพื่อให้ได้ค่าล่าสุดที่กรอกจริง ***
//                 const dataToSupabase = {
//                     datetime: new Date().toISOString(),
//                     name: postIdInput.value,
//                     type: document.getElementById('type').value,
//                     speed: parseInt(document.querySelector('input[name="speed"]:checked').value),
//                     accuracy: parseInt(document.querySelector('input[name="accuracy"]:checked').value),
//                     service: parseInt(document.querySelector('input[name="service"]:checked').value),
//                     comment: document.getElementById('comment').value
//                 };

//                 Swal.fire({
//                     title: 'ส่งข้อมูล...',
//                     text: 'กรุณารอสักครู่กำลังส่งข้อมูลของคุณ.',
//                     allowOutsideClick: false,
//                     didOpen: () => { Swal.showLoading(); }
//                 });

//                 // ส่งไปที่ Supabase
//                 axios.post(`${SUPABASE_URL}/rest/v1/data`, dataToSupabase, {
//                     headers: {
//                         "apikey": SUPABASE_KEY,
//                         "Authorization": `Bearer ${SUPABASE_KEY}`,
//                         "Content-Type": "application/json",
//                         "Prefer": "return=minimal"
//                     }
//                 })
//                     .then(response => {
//                         Swal.fire({
//                             title: 'บันทึกข้อมูลสำเร็จ!',
//                             text: 'ขอบคุณสำหรับการประเมินครับ',
//                             icon: 'success',
//                             confirmButtonText: 'OK'
//                         });
//                         document.getElementById("dataForm").reset();
//                         form.classList.remove('was-validated'); // ล้างสถานะ validation
//                     })
//                     .catch(error => {
//                         Swal.fire({ title: 'Error!', text: error.message, icon: 'error' });
//                     });
//             }
//             form.classList.add('was-validated');
//         }, false);
//     });

//     fetchData();
// })();

// // function fetchData() {

// //     // ฟังก์ชันเพื่อดึงข้อมูล
// //     if (searchParams.has('id')) {

// //         Swal.fire({
// //             title: 'กรุณารอสักครู่...',
// //             text: 'ระบบกำลังดึงข้อมูลผู้ประเมิน',
// //             allowOutsideClick: false,
// //             didOpen: () => {
// //                 Swal.showLoading();
// //             }
// //         });

// //         let sheetParam = 'Users';
// //         let idParam = searchParams.get('id');
// //         axios.get(`${API_URL}?sheet=${sheetParam}&id=${idParam}`, {
// //             headers: {
// //                 "Content-Type": "application/json"
// //             },
// //         })
// //             .then(response => {
// //                 //console.log('GET Response:', response.data);
// //                 displayData(response.data);
// //                 Swal.close()

// //             })
// //             .catch(error => {
// //                 //console.error('GET Error:', error);
// //                 Swal.fire({
// //                     title: 'Error!',
// //                     text: error,
// //                     icon: 'error',
// //                     confirmButtonText: 'OK'
// //                 });
// //             });
// //     } else {
// //         //alert("กรุณาระบุ ID ผู้ถูกประเมิน");
// //         document.getElementById("dataForm").style.display = "none";
// //         Swal.fire({
// //             title: 'Error!',
// //             text: 'กรุณาระบุ ID ผู้ถูกประเมิน',
// //             icon: 'error',
// //             confirmButtonText: 'OK'
// //         });
// //         return false;
// //     }
// // }

// // ฟังก์ชันในการแสดงข้อมูลใน HTML

// function fetchData() {
//     if (searchParams.has('id')) {
//         let idParam = searchParams.get('id');

//         // เปลี่ยนมาดึงจาก Supabase Table 'users'
//         axios.get(`${SUPABASE_URL}/rest/v1/users?id=eq.${idParam}&select=*`, {
//             headers: {
//                 "apikey": SUPABASE_KEY,
//                 "Authorization": `Bearer ${SUPABASE_KEY}`
//             },
//         })
//             .then(response => {
//                 if (response.data.length > 0) {
//                     displayData(response.data);
//                     Swal.close();
//                 } else {
//                     Swal.fire({ title: 'Error!', text: 'ไม่พบข้อมูลผู้ถูกประเมิน', icon: 'error' });
//                 }
//             })
//             .catch(error => {
//                 Swal.fire({ title: 'Error!', text: error.message, icon: 'error' });
//             });
//     } else {
//         document.getElementById("dataForm").style.display = "none";
//         Swal.fire({ title: 'Error!', text: 'กรุณาระบุ ID ผู้ถูกประเมิน', icon: 'error' });
//     }
// }


// // function displayData(posts) {
// //     const container = document.getElementById('data-container');
// //     const postImage = document.getElementById('post-image');


// //     // ใช้ข้อมูลของ post แรก (หรือเลือก post ใดก็ได้)
// //     const post = posts[0];

// //     // กำหนดค่าให้กับ image tag
// //     postImage.src = post.image;
// //     postImage.alt = post.title;

// //     // กำหนดค่าให้กับ hidden input tag
// //     postIdInput.value = post.fullname;

// //     // หากต้องการแสดงข้อมูลอื่นๆ เช่น title และ body
// //     // container.insertAdjacentHTML('beforeend', `
// //     //     <span class="fs-5 fw-bold">${post.fullname}</span>
// //     //     <p class="fs-6 text-black-50">${post.position}</p>
// //     // `);
// //     // เปลี่ยนจากแบบเดิม เป็นแบบนี้เพื่อให้เข้ากับดีไซน์ใหม่
// //     container.insertAdjacentHTML('beforeend', `
// //     <h2 class="text-xl font-bold text-gray-800">${post.fullname}</h2>
// //     <p class="text-sm text-gray-500">${post.position}</p>
// // `);
// // }

// function displayData(posts) {
//     const container = document.getElementById('data-container');
//     const postImage = document.getElementById('post-image');
//     // อ้างอิง input ใหม่อีกครั้งภายในฟังก์ชันเพื่อความแม่นยำ
//     const postIdInput = document.getElementById('post-username');

//     const post = posts[0];

//     // 1. ใส่รูป
//     postImage.src = post.image;
//     postImage.alt = post.fullname;

//     // 2. ล้างค่าเก่าใน container (ป้องกันการเบิ้ล) และใส่ชื่อ/ตำแหน่ง
//     // หมายเหตุ: ถ้าใน HTML คุณมี input อยู่ในนี้ มันจะหายไป ดังนั้นควรเอา input ไว้ข้างนอก container ครับ
//     container.innerHTML = `
//         <h2 class="text-xl font-bold text-gray-800">${post.fullname}</h2>
//         <p class="text-sm text-gray-500">${post.position}</p>
//     `;

//     // 3. กำหนดค่า ID ผู้ถูกประเมิน (ทำหลังจากจัดการ HTML ด้านบนเสร็จ)
//     if (postIdInput) {
//         postIdInput.value = post.fullname; 
//         console.log("ID ผู้ถูกประเมินที่ตั้งค่า:", postIdInput.value); // เช็กใน Console ว่าค่ามาไหม
//     }
// }

const API_URL = 'https://script.google.com/macros/s/AKfycbwb7SuSZszPyorEu8106QfEylzNs7EZyFWhQ2qANJXDamkL2MSCkALTIgqsRZoiD2c/exec';
const searchParams = new URLSearchParams(window.location.search);

const SUPABASE_URL = 'https://yzegultmfbdwunocrraf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6ZWd1bHRtZmJkd3Vub2NycmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MjYwODksImV4cCI6MjA4NTMwMjA4OX0.UAri00e0ZwsGRVx_-ONmG93c_51c7oHaZOcT49N0D5E';

(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();

                // ดึงค่า ID จาก input ที่เรามั่นใจว่าไม่โดนลบ
                const postIdInput = document.getElementById('post-username');
                
                if (!postIdInput || !postIdInput.value) {
                    Swal.fire({ title: 'Error!', text: 'ไม่พบไอดีผู้ถูกประเมิน กรุณารีโหลดหน้าเว็บ', icon: 'error' });
                    return;
                }

                const dataToSupabase = {
                    datetime: new Date().toISOString(),
                    name: postIdInput.value,
                    type: document.getElementById('type').value,
                    speed: parseInt(document.querySelector('input[name="speed"]:checked').value),
                    accuracy: parseInt(document.querySelector('input[name="accuracy"]:checked').value),
                    service: parseInt(document.querySelector('input[name="service"]:checked').value),
                    comment: document.getElementById('comment').value
                };

                Swal.fire({
                    title: 'ส่งข้อมูล...',
                    text: 'กรุณารอสักครู่กำลังส่งข้อมูลของคุณ.',
                    allowOutsideClick: false,
                    didOpen: () => { Swal.showLoading(); }
                });

                axios.post(`${SUPABASE_URL}/rest/v1/evaluation_results`, dataToSupabase, {
                    headers: {
                        "apikey": SUPABASE_KEY,
                        "Authorization": `Bearer ${SUPABASE_KEY}`,
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    }
                })
                .then(response => {
                    Swal.fire({ title: 'บันทึกสำเร็จ!', text: 'ขอบคุณสำหรับการประเมินครับ', icon: 'success' });
                    document.getElementById("dataForm").reset();
                    form.classList.remove('was-validated');
                })
                .catch(error => {
                    Swal.fire({ title: 'Error!', text: error.message, icon: 'error' });
                });
            }
            form.classList.add('was-validated');
        }, false);
    });

    fetchData();
})();

function fetchData() {
    if (searchParams.has('id')) {
        let idParam = searchParams.get('id');
        axios.get(`${SUPABASE_URL}/rest/v1/users?id=eq.${idParam}&select=*`, {
            headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` },
        })
        .then(response => {
            if (response.data.length > 0) {
                displayData(response.data);
                Swal.close();
            } else {
                Swal.fire({ title: 'Error!', text: 'ไม่พบข้อมูลผู้ถูกประเมิน', icon: 'error' });
            }
        })
        .catch(error => {
            Swal.fire({ title: 'Error!', text: error.message, icon: 'error' });
        });
    } else {
        document.getElementById("dataForm").style.display = "none";
        Swal.fire({ title: 'Error!', text: 'กรุณาระบุ ID ผู้ถูกประเมิน', icon: 'error' });
    }
}

function displayData(posts) {
    const container = document.getElementById('data-container');
    const postImage = document.getElementById('post-image');
    const postIdInput = document.getElementById('post-username');
    const post = posts[0];

    // แก้ไขรูปภาพ
    if (postImage) {
        postImage.src = post.image || 'https://www.ttmed.psu.ac.th/th/static/images/staff/new.jpg';
        postImage.classList.add('object-cover'); // ย้ำว่าให้รูปเต็มวงกลม
    }

    // แก้ไข ID ผู้ถูกประเมิน
    if (postIdInput) {
        postIdInput.value = post.fullname;
    }

    // แสดงชื่อและตำแหน่ง (ใช้ innerHTML แทน เพื่อไม่ให้ข้อมูลซ้ำซ้อน)
    container.innerHTML = `
        <h2 class="text-xl font-bold text-gray-800 leading-tight">${post.fullname}</h2>
        <p class="text-sm text-gray-500 mt-1">${post.position || ''}</p>
    `;
}