const mime_dict = {
  "aac": {
    "kind": "AAC audio",
    "mime": "audio/aac"
  },
  "abw": {
    "kind": "AbiWord document",
    "mime": "application/x-abiword"
  },
  "arc": {
    "kind": "Archive document (multiple files embedded)",
    "mime": "application/x-freearc"
  },
  "avi": {
    "kind": "AVI: Audio Video Interleave",
    "mime": "video/x-msvideo"
  },
  "azw": {
    "kind": "Amazon Kindle eBook format",
    "mime": "application/vnd.amazon.ebook"
  },
  "bin": {
    "kind": "Any kind of binary data",
    "mime": "application/octet-stream"
  },
  "bmp": {
    "kind": "Windows OS/2 Bitmap Graphics",
    "mime": "image/bmp"
  },
  "bz": {
    "kind": "BZip archive",
    "mime": "application/x-bzip"
  },
  "bz2": {
    "kind": "BZip2 archive",
    "mime": "application/x-bzip2"
  },
  "csh": {
    "kind": "C-Shell script",
    "mime": "application/x-csh"
  },
  "css": {
    "kind": "Cascading Style Sheets (CSS)",
    "mime": "text/css"
  },
  "csv": {
    "kind": "Comma-separated values (CSV)",
    "mime": "text/csv"
  },
  "doc": {
    "kind": "Microsoft Word",
    "mime": "application/msword"
  },
  "docx": {
    "kind": "Microsoft Word (OpenXML)",
    "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  },
  "eot": {
    "kind": "MS Embedded OpenType fonts",
    "mime": "application/vnd.ms-fontobject"
  },
  "epub": {
    "kind": "Electronic publication (EPUB)",
    "mime": "application/epub+zip"
  },
  "gz": {
    "kind": "GZip Compressed Archive",
    "mime": "application/gzip"
  },
  "gif": {
    "kind": "Graphics Interchange Format (GIF)",
    "mime": "image/gif"
  },
  "html": {
    "kind": "HyperText Markup Language (HTML)",
    "mime": "text/html"
  },
  "htm": {
    "kind": "HyperText Markup Language (HTML)",
    "mime": "text/html"
  },
  "ico": {
    "kind": "Icon format",
    "mime": "image/vnd.microsoft.icon"
  },
  "ics": {
    "kind": "iCalendar format",
    "mime": "text/calendar"
  },
  "jar": {
    "kind": "Java Archive (JAR)",
    "mime": "application/java-archive"
  },
  "jpeg": {
    "kind": "JPEG images",
    "mime": "image/jpeg"
  },
  "jpg": {
    "kind": "JPEG images",
    "mime": "image/jpg"
  },
  "js": {
    "kind": "JavaScript",
    "mime": "text/javascript"
  },
  "json": {
    "kind": "JSON format",
    "mime": "application/json"
  },
  "jsonld": {
    "kind": "JSON-LD format",
    "mime": "application/ld+json"
  },
  "mid": {
    "kind": "Musical Instrument Digital Interface (MIDI)",
    "mime": "audio/midi"
  },
  "midi": {
    "kind": "Musical Instrument Digital Interface (MIDI)",
    "mime": "audio/x-midi"
  },
  "mjs": {
    "kind": "JavaScript module",
    "mime": "text/javascript"
  },
  "mp3": {
    "kind": "MP3 audio",
    "mime": "audio/mpeg"
  },
  "mpeg": {
    "kind": "MPEG Video",
    "mime": "video/mpeg"
  },
  "mpkg": {
    "kind": "Apple Installer Package",
    "mime": "application/vnd.apple.installer+xml"
  },
  "odp": {
    "kind": "OpenDocument presentation document",
    "mime": "application/vnd.oasis.opendocument.presentation"
  },
  "ods": {
    "kind": "OpenDocument spreadsheet document",
    "mime": "application/vnd.oasis.opendocument.spreadsheet"
  },
  "odt": {
    "kind": "OpenDocument text document",
    "mime": "application/vnd.oasis.opendocument.text"
  },
  "oga": {
    "kind": "OGG audio",
    "mime": "audio/ogg"
  },
  "ogv": {
    "kind": "OGG video",
    "mime": "video/ogg"
  },
  "ogx": {
    "kind": "OGG",
    "mime": "application/ogg"
  },
  "opus": {
    "kind": "Opus audio",
    "mime": "audio/opus"
  },
  "otf": {
    "kind": "OpenType font",
    "mime": "font/otf"
  },
  "png": {
    "kind": "Portable Network Graphics",
    "mime": "image/png"
  },
  "pdf": {
    "kind": "Adobe Portable Document Format (PDF)",
    "mime": "application/pdf"
  },
  "php": {
    "kind": "Hypertext Preprocessor (Personal Home Page)",
    "mime": "application/x-httpd-php"
  },
  "ppt": {
    "kind": "Microsoft PowerPoint",
    "mime": "application/vnd.ms-powerpoint"
  },
  "pptx": {
    "kind": "Microsoft PowerPoint (OpenXML)",
    "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  },
  "rar": {
    "kind": "RAR archive",
    "mime": "application/vnd.rar"
  },
  "rtf": {
    "kind": "Rich Text Format (RTF)",
    "mime": "application/rtf"
  },
  "sh": {
    "kind": "Bourne shell script",
    "mime": "application/x-sh"
  },
  "svg": {
    "kind": "Scalable Vector Graphics (SVG)",
    "mime": "image/svg+xml"
  },
  "swf": {
    "kind": "Small web format (SWF) or Adobe Flash document",
    "mime": "application/x-shockwave-flash"
  },
  "tar": {
    "kind": "Tape Archive (TAR)",
    "mime": "application/x-tar"
  },
  "tif": {
    "kind": "Tagged Image File Format (TIFF)",
    "mime": "image/tiff"
  },
  "tiff": {
    "kind": "Tagged Image File Format (TIFF)",
    "mime": "image/tiff"
  },
  "ts": {
    "kind": "MPEG transport stream",
    "mime": "video/mp2t"
  },
  "ttf": {
    "kind": "TrueType Font",
    "mime": "font/ttf"
  },
  "txt": {
    "kind": "Text, (generally ASCII or ISO 8859-n)",
    "mime": "text/plain"
  },
  "vsd": {
    "kind": "Microsoft Visio",
    "mime": "application/vnd.visio"
  },
  "wav": {
    "kind": "Waveform Audio Format",
    "mime": "audio/wav"
  },
  "weba": {
    "kind": "WEBM audio",
    "mime": "audio/webm"
  },
  "webm": {
    "kind": "WEBM video",
    "mime": "video/webm"
  },
  "webp": {
    "kind": "WEBP image",
    "mime": "image/webp"
  },
  "woff": {
    "kind": "Web Open Font Format (WOFF)",
    "mime": "font/woff"
  },
  "woff2": {
    "kind": "Web Open Font Format (WOFF)",
    "mime": "font/woff2"
  },
  "xhtml": {
    "kind": "XHTML",
    "mime": "application/xhtml+xml"
  },
  "xls": {
    "kind": "Microsoft Excel",
    "mime": "application/vnd.ms-excel"
  },
  "xlsx": {
    "kind": "Microsoft Excel (OpenXML)",
    "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  },
  "xml": {
    "kind": "XML",
    "mime": "application/xml"
  },
  "xul": {
    "kind": "XUL",
    "mime": "application/vnd.mozilla.xul+xml"
  },
  "zip": {
    "kind": "ZIP archive",
    "mime": "application/zip"
  },
  "3gp": {
    "kind": "3GPP audio/video container",
    "mime": "video/3gpp audio/3gpp"
  },
  "3g2": {
    "kind": "3GPP2 audio/video container",
    "mime": "video/3gpp2 audio/3gpp2"
  },
  "7z": {
    "kind": "7-zip archive",
    "mime": "application/x-7z-compressed"
  }
};
// ref to https://learndataanalysis.org/commonly-used-mime-types/

const mime_detect = (filename) => {
  const suffix = filename.split('.').pop();
  return mime_dict[suffix]['mime'] || `application/${suffix}`;
};

exports.mime_detect = mime_detect;