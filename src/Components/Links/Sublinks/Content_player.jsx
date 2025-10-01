import React, { useState, useRef, useEffect } from 'react';
import { CiSettings } from "react-icons/ci";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// --- SVG Icons ---
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>;
const VolumeHighIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>;
const VolumeMuteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>;
const FullscreenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>;
const NotesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const CameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const QuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const CommentsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const UpvoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const AddNoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;

const InteractivePlayerPage = () => {
    const videoSources = { '1080p': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', '720p': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', '360p': 'https://www.w3schools.com/html/mov_bbb.mp4', };
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [quality, setQuality] = useState('720p');
    const [showSettings, setShowSettings] = useState(false);
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const notesEditorRef = useRef(null);
    const sessionNotesRef = useRef(null);
    const [activeSidebarTab, setActiveSidebarTab] = useState('q&a');
    const [userSessionRating, setUserSessionRating] = useState(0);
    const [hoverSessionRating, setHoverSessionRating] = useState(0);
    const [chatMessages, setChatMessages] = useState([ { user: 'Rahul', avatar: 'R', message: 'This is a great explanation!' }, { user: 'Priya', avatar: 'P', message: 'I was just about to ask that question, thanks Sameer!' }, { user: 'Sameer', avatar: 'S', message: 'Can you show how to deploy this to Netlify?' }, { user: 'Anjali', avatar: 'A', message: 'The video quality is amazing 🔥' }, ]);
    const [questions, setQuestions] = useState([ { id: 1, user: 'Priya Sharma', text: 'How does the useEffect cleanup function work in this specific example? I\'m a bit confused about the dependency array.', time: '5m ago', upvotes: 12 }, { id: 2, user: 'Sameer Khan', text: 'What are the pros and cons of using state management libraries like Redux vs. Zustand for a project of this scale?', time: '22m ago', upvotes: 8 }, ]);
    const [comments, setComments] = useState([ { id: 1, user: 'Rahul Varma', text: 'This was one of the clearest explanations of React hooks I have ever seen. Thank you so much for this video!', time: '2 hours ago' }, { id: 2, user: 'Anjali Singh', text: 'Great content! Looking forward to the next part of this series.', time: '5 hours ago' }, ]);
    const canvasRef = useRef(null);
    const [screenshots, setScreenshots] = useState([]);
    const [newChatMessage, setNewChatMessage] = useState("");
    const [notesContent, setNotesContent] = useState("");
    const sessionNotesContent = `<h3>Module 1: Introduction to React</h3><p>This session covers the fundamental concepts of React.js that every developer needs to know.</p><h4>Key Takeaways:</h4><ul><li><strong>What is React?</strong> A JavaScript library for building user interfaces.</li><li><strong>Components:</strong> The building blocks of a React application.</li><li><strong>JSX:</strong> A syntax extension for JavaScript that looks like HTML.</li><li><strong>Props:</strong> How components pass data to each other.</li></ul><p>Remember to install the React Developer Tools extension for your browser. It will be invaluable for debugging.</p>`;
    
    const togglePlayPause = () => { if (videoRef.current.paused) { videoRef.current.play(); setIsPlaying(true); } else { videoRef.current.pause(); setIsPlaying(false); } };
    const handleTimeUpdate = () => { if (videoRef.current) { setCurrentTime(videoRef.current.currentTime); setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100); } };
    const handleSeek = (e) => { const rect = e.currentTarget.getBoundingClientRect(); const seekTime = ((e.clientX - rect.left) / rect.width) * duration; videoRef.current.currentTime = seekTime; };
    const handleVolumeChange = (e) => { const newVolume = e.target.value; setVolume(newVolume); videoRef.current.volume = newVolume; setIsMuted(newVolume === '0'); };
    const toggleMute = () => { const newMutedState = !isMuted; setIsMuted(newMutedState); const newVolume = newMutedState ? 0 : 1; setVolume(newVolume); videoRef.current.volume = newVolume; };
    const handleSpeedChange = (speed) => { setPlaybackSpeed(speed); videoRef.current.playbackRate = speed; setShowSettings(false); };
    const handleQualityChange = (newQuality) => { if (videoRef.current) { const tempCurrentTime = videoRef.current.currentTime; const wasPlaying = !videoRef.current.paused; setQuality(newQuality); videoRef.current.onloadeddata = () => { videoRef.current.currentTime = tempCurrentTime; videoRef.current.playbackRate = playbackSpeed; if (wasPlaying) { videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Error playing video:", e)); } }; } setShowSettings(false); };
    const formatTime = (time) => { if (isNaN(time)) return '00:00'; const minutes = Math.floor(time / 60); const seconds = Math.floor(time % 60); return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; };
    const toggleFullScreen = async () => { const playerElement = playerRef.current; if (!playerElement) return; try { if (!document.fullscreenElement) { await playerElement.requestFullscreen(); } else { await document.exitFullscreen(); } } catch (error) { console.error("Fullscreen failed:", error); } };
    const handleChatInput = (e) => { setNewChatMessage(e.target.value); e.target.style.height = 'auto'; e.target.style.height = `${e.target.scrollHeight}px`; };
    const handleSendChatMessage = () => { if (newChatMessage.trim() !== '') { setChatMessages(prev => [...prev, { user: 'You', avatar: 'Y', message: newChatMessage }]); setNewChatMessage(''); const textarea = document.querySelector('.chat-textarea'); if(textarea) textarea.style.height = 'auto'; } };
    const handleTakeScreenshot = () => { const video = videoRef.current; const canvas = canvasRef.current; if (video && canvas) { canvas.width = video.videoWidth; canvas.height = video.videoHeight; const ctx = canvas.getContext('2d'); ctx.drawImage(video, 0, 0, canvas.width, canvas.height); const dataUrl = canvas.toDataURL('image/png'); setScreenshots(prev => [...prev, { id: Date.now(), src: dataUrl, time: formatTime(currentTime) }]); setActiveSidebarTab('screenshots'); alert('Screenshot captured!'); } };
    const addScreenshotToNotes = (screenshotSrc) => { const wrapperId = `ss-${Date.now()}`; const imgHtml = `<div id="${wrapperId}" class="note-image-wrapper"><img src="${screenshotSrc}" alt="Screenshot"/><button class="remove-note-image-btn" data-wrapper-id="${wrapperId}">×</button></div>`; setNotesContent(prevContent => prevContent + imgHtml + "<p><br></p>"); alert('Screenshot added to notes!'); setActiveSidebarTab('notes'); };
    
    const downloadPdf = (element, filename) => {
        if (!element || (element.innerText.trim() === '' && element.children.length === 0)) {
            alert('There is no content to download.');
            return;
        }
        html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save(filename);
        });
    };

    const handleDownloadNotes = () => downloadPdf(notesEditorRef.current, 'my-notes.pdf');
    const handleDownloadSessionNotes = () => downloadPdf(sessionNotesRef.current, 'session-notes.pdf');

    useEffect(() => { const handleKeyDown = (e) => { if (e.key === 'PrintScreen' || (e.metaKey && e.shiftKey)) { e.preventDefault(); alert('Screenshots are disabled. Please use the in-player screenshot button.'); } }; window.addEventListener('keydown', handleKeyDown); return () => window.removeEventListener('keydown', handleKeyDown); }, []);
    useEffect(() => { const handleFullscreenChange = async () => { if (document.fullscreenElement) { try { if (screen.orientation && typeof screen.orientation.lock === 'function') { await screen.orientation.lock('landscape'); } } catch (err) { console.error('Could not lock screen orientation:', err); } } else { try { if (screen.orientation && typeof screen.orientation.unlock === 'function') { screen.orientation.unlock(); } } catch (err) { console.error('Could not unlock screen orientation:', err); } } }; document.addEventListener('fullscreenchange', handleFullscreenChange); return () => document.removeEventListener('fullscreenchange', handleFullscreenChange); }, []);
    useEffect(() => { const editor = notesEditorRef.current; if (editor && editor.innerHTML !== notesContent) { editor.innerHTML = notesContent; } const handleNotesClick = (e) => { if (e.target && e.target.classList.contains('remove-note-image-btn')) { const wrapperId = e.target.getAttribute('data-wrapper-id'); const wrapperToRemove = editor.querySelector(`#${wrapperId}`); if (wrapperToRemove) { wrapperToRemove.remove(); setNotesContent(editor.innerHTML); } } }; if (editor) { editor.addEventListener('click', handleNotesClick); } return () => { if (editor) { editor.removeEventListener('click', handleNotesClick); } }; }, [notesContent, activeSidebarTab]);

    return (
        <>
            <style>{`
                *, *::before, *::after { box-sizing: border-box; }
                .player-page { font-family: 'Lexend', sans-serif; background-color: #F9FAFB; min-height: 100vh; padding: 1.5rem; }
                .main-content-wrapper { max-width: 1800px; margin: 0 auto; }
                .player-layout { display: grid; grid-template-columns: 2.5fr 1fr; gap: 1.5rem; }
                .video-player-container { position: relative; width: 100%; aspect-ratio: 16 / 9; min-height: 220px; background-color: #111827; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); overflow: hidden; }
                .screenshot-deterrent { -webkit-user-select: none; user-select: none; }
                .video-player-container video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; border-radius: 1rem; object-fit: cover; }
                .video-controls { position: absolute; bottom: 0; left: 0; right: 0; color: white; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); opacity: 0; visibility: hidden; transition: opacity 0.3s, visibility 0.3s; padding: 0.5rem; }
                .video-player-container:hover .video-controls { opacity: 1; visibility: visible; }
                .progress-bar-wrapper { width: 100%; padding: 0.5rem 1rem; box-sizing: border-box; }
                .progress-bar { height: 8px; background-color: rgba(255,255,255,0.3); cursor: pointer; border-radius: 5px; }
                .progress-bar-filled { height: 100%; background-color: #4F46E5; border-radius: 5px; }
                .bottom-controls { display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
                .controls-left, .controls-right { display: flex; align-items: center; gap: 0.75rem; }
                .control-button { background: none; border: none; color: white; cursor: pointer; padding: 0.5rem; }
                .time-display { font-size: 0.9rem; }
                .volume-controls { display: flex; align-items: center; gap: 0.5rem; }
                .volume-slider { width: 80px; accent-color: #4F46E5; }
                .settings-wrapper { position: relative; }
                .settings-menu { position: absolute; bottom: 55px; right: 1rem; width: 160px; max-height: 18vh; overflow-y: auto; background-color: rgba(28, 37, 51, 0.95); border-radius: 0.5rem; padding: 0.5rem; z-index: 10; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
                .settings-menu h4 { font-size: 0.75rem; color: #9CA3AF; text-transform: uppercase; margin: 0.5rem; font-weight: 500; }
                .settings-menu ul { list-style: none; padding: 0; margin: 0 0 0.5rem 0; }
                .settings-menu li { padding: 0.5rem; cursor: pointer; border-radius: 0.25rem; font-size: 0.9rem; }
                .settings-menu li:hover, .settings-menu li.active { background-color: #4F46E5; }
                #screenshot-canvas { display: none; }
                .rate-session-section, .session-notes-section { margin-top: 1.5rem; }
                .rate-session-container { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; text-align: center; }
                .rate-session-container h3 { margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 600; color: #111827; }
                .rating-stars-input { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.25rem; }
                .rating-stars-input svg { width: 28px; height: 28px; cursor: pointer; color: #D1D5DB; transition: color 0.2s; }
                .rating-stars-input svg.filled, .rating-stars-input svg.hovered { color: #FBBF24; }
                .interaction-hub { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; display: flex; flex-direction: column; max-height: calc(100vh - 3rem); }
                .sidebar-tabs { display: flex; flex-wrap: nowrap; border-bottom: 1px solid #E5E7EB; padding: 0 1rem; overflow-x: auto; -ms-overflow-style: none; scrollbar-width: none; }
                .sidebar-tabs::-webkit-scrollbar { display: none; }
                .sidebar-tab-button { display: flex; align-items: center; gap: 0.5rem; padding: 1rem 0.75rem; font-size: 0.9rem; font-weight: 500; background: none; border: none; cursor: pointer; border-bottom: 3px solid transparent; color: #6B7280; margin-bottom: -1px; flex-shrink: 0; white-space: nowrap; }
                .sidebar-tab-button.active { color: #4F46E5; border-bottom-color: #4F46E5; }
                .sidebar-content { padding: 1.5rem; overflow-y: auto; flex-grow: 1; }
                .sidebar-title { font-size: 1.25rem; font-weight: 600; margin: 0 0 1.5rem 0; color: #111827; }
                .submit-btn { width: 100%; padding: 0.7rem 1rem; background-color: #1F2937; color: white; border: none; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: background-color 0.2s; }
                .submit-btn:hover { background-color: #111827; }
                .notes-editor { width: 100%; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.75rem; min-height: 250px; outline: none; }
                .notes-actions { display: flex; gap: 0.75rem; margin-top: 1rem; }
                .screenshots-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
                .screenshot-item { position: relative; cursor: pointer; }
                .screenshot-item img { width: 100%; display: block; border-radius: 0.5rem; }
                .screenshot-item:hover .screenshot-overlay { opacity: 1; }
                .screenshot-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; border-radius: 0.5rem; }
                .screenshot-time { font-size: 0.8rem; font-weight: 500; }
                .screenshot-add-btn { background: rgba(255,255,255,0.9); color: #111827; border: none; border-radius: 99px; padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 500; cursor: pointer; margin-top: 0.25rem; display: flex; align-items: center; gap: 0.25rem;}
                .settings-icon{font-size: 1.5rem;}
                .live-chat-messages { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; height: 300px; overflow-y: auto; padding-right: 0.5rem;}
                .chat-message { display: flex; gap: 0.75rem; }
                .chat-avatar { width: 32px; height: 32px; border-radius: 50%; background-color: #4F46E5; color: white; display: flex; align-items: center; justify-content: center; font-weight: 500; flex-shrink: 0; }
                .chat-content { display: flex; flex-direction: column; }
                .chat-user { font-size: 0.9rem; font-weight: 600; color: #1F2937; }
                .chat-text { font-size: 0.9rem; color: #4B5563; line-height: 1.5; }
                .item-list { display: flex; flex-direction: column; gap: 1.5rem; }
                .qa-item, .comment-item { display: flex; gap: 1rem; }
                .item-main { width: 100%; }
                .item-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
                .item-user { font-size: 0.95rem; font-weight: 600; color: #111827; }
                .item-meta { font-size: 0.8rem; color: #6B7280; }
                .item-text { font-size: 0.9rem; line-height: 1.6; color: #374151; margin-bottom: 0.5rem; }
                .upvote-btn { display: flex; align-items: center; gap: 0.5rem; background-color: #F3F4F6; border: 1px solid #E5E7EB; color: #374151; padding: 0.25rem 0.75rem; border-radius: 99px; cursor: pointer; font-size: 0.85rem; font-weight: 500; }
                .upvote-btn:hover { background-color: #E5E7EB; }
                .input-container-with-avatar { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem; }
                .input-avatar { width: 32px; height: 32px; border-radius: 50%; background-color: #1F2937; color: white; display: flex; align-items: center; justify-content: center; font-weight: 500; flex-shrink: 0; }
                .form-textarea { width: 100%; border: 1px solid #D1D5DB; border-radius: 0.5rem; padding: 0.75rem; font-family: 'Lexend', sans-serif; resize: vertical; min-height: 80px; }
                .form-textarea:focus { outline: none; border-color: #4F46E5; box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); }
                .chat-input-area { display: flex; align-items: center; gap: 0.75rem; background-color: #F3F4F6; border-radius: 99px; padding: 0.5rem; }
                .chat-textarea { flex-grow: 1; border: none; background: transparent; outline: none; resize: none; font-family: 'Lexend', sans-serif; font-size: 0.9rem; padding: 0.5rem; max-height: 100px; overflow-y: auto; }
                .chat-send-btn { background-color: #4F46E5; color: white; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: background-color 0.2s; }
                .chat-send-btn:hover { background-color: #4338CA; }
                .note-image-wrapper { position: relative; display: inline-block; max-width: 90%; margin: 0.5rem 0; }
                .note-image-wrapper > img { max-width: 100%; display: block; border-radius: 0.5rem; }
                .remove-note-image-btn { position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; background: rgba(0,0,0,0.6); color: white; border: 2px solid white; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; line-height: 1; font-weight: bold; transition: background-color 0.2s; }
                .remove-note-image-btn:hover { background: rgba(220, 53, 69, 0.8); }
                .session-notes-container { background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; }
                .session-notes-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E5E7EB; padding-bottom: 1rem; margin-bottom: 1rem; }
                .session-notes-header h3 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #111827; }
                .download-notes-btn { background-color: #4F46E5; color: white; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; font-weight: 500; cursor: pointer; transition: background-color 0.2s; display: flex; align-items: center; gap: 0.5rem; }
                .download-notes-btn:hover { background-color: #4338CA; }
                .session-notes-content { line-height: 1.7; color: #374151; } .session-notes-content h3 { font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; } .session-notes-content h4 { font-size: 1rem; font-weight: 600; color: #1F2937; margin-top: 1.5rem; margin-bottom: 0.5rem; } .session-notes-content p { margin-bottom: 1rem; } .session-notes-content ul { list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; } .session-notes-content li { margin-bottom: 0.5rem; }
                @media (max-width: 1200px) { .player-layout { grid-template-columns: 1fr; } .interaction-hub { max-height: none; } .main-content-wrapper, .session-notes-section, .rate-session-section { width: 80%; } .interaction-hub { width:100% } }
                @media (max-width: 768px) { .player-page { padding: 1rem 0; } .main-content-wrapper, .session-notes-section, .rate-session-section { width: 95%; } .settings-menu { width: 120px; bottom: 45px; right: 5px; padding: 0.25rem; } .settings-menu h4 { font-size: 0.65rem; margin: 0.25rem 0.4rem; } .settings-menu li { font-size: 0.8rem; padding: 0.3rem 0.4rem; } .volume-slider { display: none; } }
            `}</style>
            
            <div className="player-page">
                <div className="main-content-wrapper">
                    <div className="player-layout">
                        <div className="video-player-container screenshot-deterrent" ref={playerRef}>
                            <video crossOrigin="anonymous" key={quality} ref={videoRef} src={videoSources[quality]} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={() => setDuration(videoRef.current.duration)} onClick={togglePlayPause} />
                            <div className="video-controls"><div className="progress-bar-wrapper"><div className="progress-bar" onClick={handleSeek}><div className="progress-bar-filled" style={{width: `${progress}%`}}></div></div></div><div className="bottom-controls"><div className="controls-left"><button className="control-button" onClick={togglePlayPause}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</button><div className="volume-controls"><button className="control-button" onClick={toggleMute}>{isMuted ? <VolumeMuteIcon/> : <VolumeHighIcon />}</button><input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="volume-slider"/></div><span className="time-display">{formatTime(currentTime)} / {formatTime(duration)}</span></div><div className="controls-right"><div className="settings-wrapper"><button className="control-button" onClick={() => setShowSettings(!showSettings)}><CiSettings className='settings-icon'/></button>{showSettings && (<div className="settings-menu"><h4>Quality</h4><ul>{Object.keys(videoSources).map(q => (<li key={q} onClick={() => handleQualityChange(q)} className={quality === q ? 'active' : ''}>{q}</li>))}</ul><h4>Speed</h4><ul>{[0.5, 1, 1.5, 2].map(speed => (<li key={speed} onClick={() => handleSpeedChange(speed)} className={playbackSpeed === speed ? 'active' : ''}>{speed}x</li>))}</ul></div>)}</div><button className="control-button" onClick={toggleFullScreen}><FullscreenIcon/></button></div></div></div>
                        </div>
                        <aside className="interaction-hub">
                            <div className="sidebar-tabs">
                                <button className={`sidebar-tab-button ${activeSidebarTab === 'q&a' ? 'active' : ''}`} onClick={() => setActiveSidebarTab('q&a')}><QuestionIcon /> Q&A</button>
                                <button className={`sidebar-tab-button ${activeSidebarTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveSidebarTab('chat')}><ChatIcon /> Chat</button>
                                <button className={`sidebar-tab-button ${activeSidebarTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveSidebarTab('comments')}><CommentsIcon /> Comments</button>
                                <button className={`sidebar-tab-button ${activeSidebarTab === 'screenshots' ? 'active' : ''}`} onClick={() => setActiveSidebarTab('screenshots')}><CameraIcon/> Screenshots</button>
                                <button className={`sidebar-tab-button ${activeSidebarTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveSidebarTab('notes')}><NotesIcon /> My Notes</button>
                            </div>
                            <div className="sidebar-content">
                                {activeSidebarTab === 'q&a' && ( <div> <h2 className="sidebar-title">Ask a Question</h2> <div className="input-container-with-avatar"><div className="input-avatar">Y</div><textarea className="form-textarea" placeholder="Type your question here..." rows="3"></textarea></div> <button className="submit-btn">Submit Question</button> <hr style={{border: 'none', borderTop: '1px solid #E5E7EB', margin: '1.5rem 0'}} /> <div className="item-list">{questions.map(q => (<div key={q.id} className="qa-item"><div className="chat-avatar">{q.user.charAt(0)}</div><div className="item-main"><div className="item-header"><span className="item-user">{q.user}</span><span className="item-meta">{q.time}</span></div><p className="item-text">{q.text}</p><button className="upvote-btn"><UpvoteIcon /> {q.upvotes}</button></div></div>))}</div> </div> )}
                                {activeSidebarTab === 'chat' && ( <div> <h2 className="sidebar-title">Live Chat</h2> <div className="live-chat-messages">{chatMessages.map((msg, index) => (<div key={index} className="chat-message"><div className="chat-avatar">{msg.avatar}</div><div className="chat-content"><span className="chat-user">{msg.user}</span><p className="chat-text">{msg.message}</p></div></div>))}</div> <div className="chat-input-area"><textarea rows="1" className="chat-textarea" placeholder="Send a message..." value={newChatMessage} onInput={handleChatInput}></textarea><button className="chat-send-btn" onClick={handleSendChatMessage}><SendIcon /></button></div> </div> )}
                                {activeSidebarTab === 'comments' && ( <div> <h2 className="sidebar-title">Comments</h2> <div className="input-container-with-avatar"><div className="input-avatar">Y</div><textarea className="form-textarea" placeholder="Add a public comment..." rows="3"></textarea></div> <button className="submit-btn">Post Comment</button> <hr style={{border: 'none', borderTop: '1px solid #E5E7EB', margin: '1.5rem 0'}} /> <div className="item-list">{comments.map(c => (<div key={c.id} className="comment-item"><div className="chat-avatar">{c.user.charAt(0)}</div><div className="item-main"><div className="item-header"><span className="item-user">{c.user}</span><span className="item-meta">{c.time}</span></div><p className="item-text">{c.text}</p></div></div>))}</div> </div> )}
                                {activeSidebarTab === 'screenshots' && ( <div> <h2 className="sidebar-title">Screenshots</h2> <button className="submit-btn" onClick={handleTakeScreenshot}>Take Screenshot of Current Frame</button> <div className="screenshots-gallery"> {screenshots.map(shot => ( <div key={shot.id} className="screenshot-item" onClick={() => addScreenshotToNotes(shot.src)}> <img src={shot.src} alt={`Screenshot at ${shot.time}`} /> <div className="screenshot-overlay"> <span className="screenshot-time">{shot.time}</span> <span className="screenshot-add-btn"><AddNoteIcon/> Add to Notes</span> </div> </div> ))} {screenshots.length === 0 && <p style={{color: '#6B7280', fontSize: '0.9rem'}}>No screenshots taken yet.</p>} </div> </div> )}
                                {activeSidebarTab === 'notes' && ( <div> <h2 className="sidebar-title">My Private Notes</h2> <div ref={notesEditorRef} contentEditable="true" className="notes-editor" onBlur={e => setNotesContent(e.currentTarget.innerHTML)} /> <div className="notes-actions"> <button className="submit-btn" style={{flex: 1}} onClick={() => alert('Notes saved!')}>Save Notes</button> <button className="submit-btn" style={{flex: 1, background: '#4F46E5'}} onClick={handleDownloadNotes}>Download as PDF</button> </div> </div> )}
                            </div>
                        </aside>
                    </div>
                    
                    <div className="session-notes-section">
                        <div className="session-notes-container">
                            <div className="session-notes-header">
                                <h3>Session Notes</h3>
                                <button onClick={handleDownloadSessionNotes} className="download-notes-btn"><DownloadIcon /> Download as PDF</button>
                            </div>
                            <div ref={sessionNotesRef} className="session-notes-content" dangerouslySetInnerHTML={{ __html: sessionNotesContent }} />
                        </div>
                    </div>

                    <div className="rate-session-section">
                        <div className="rate-session-container">
                            <h3>How would you rate this session?</h3>
                            <div className="rating-stars-input">
                                {[...Array(5)].map((_, index) => { const ratingValue = index + 1; return ( <span key={ratingValue} onMouseEnter={() => setHoverSessionRating(ratingValue)} onMouseLeave={() => setHoverSessionRating(0)} onClick={() => setUserSessionRating(ratingValue)}> <svg viewBox="0 0 24 24" fill="currentColor" className={ratingValue <= (hoverSessionRating || userSessionRating) ? 'filled' : ''}> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg> </span> ); })}
                            </div>
                            <button className="submit-btn" style={{maxWidth: '200px', margin: '0 auto'}} onClick={() => alert(`Thank you for your ${userSessionRating}-star rating!`)}>Submit Rating</button>
                        </div>
                    </div>
                </div>
            </div>
            <canvas ref={canvasRef} id="screenshot-canvas"></canvas>
        </>
    );
};

export default InteractivePlayerPage;