function setPathname(pathname, setPage) {
   const validPathNames = ['body','mind','space','about','home'];
   if(validPathNames.includes(pathname)) {
      setPage(pathname);
   }
}

export default setPathname;
