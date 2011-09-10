/**
 * This is the top-level Titanium module, containing all Titanium APIs.
 * Titanium API objects generally follow the setProperty()/getProperty()
 * pattern, but you may also use accessors for most operations For example:
 *
 * var window = Titanium.UI.currentWindow;
 *     window.setHeight(300); // Set the window height to 300 pixels.
 *     window.height = 300; // The same.

 * @since 0.2.0
 * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium-module }
 *
 *
 */
var Titanium = {
    /**
     * A module for dealing with application and component updates.

     * @since 0.4.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UpdateManager-module.html }
     *
     *
     */
    UpdateManager: {
        /**
         * Install an application update received from update monitor. This method will cause the process to first be restarted for the update to begin.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UpdateManager.installAppUpdate-method.html }
         *
         * @param Object updateSpec Update spec object received from update service.
         * @return String
         *
         */
        installAppUpdate: function(updateSpec) {
        }

        ,
        /**
         * Check the update service for a new version

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UpdateManager.startMonitor-method.html }
         *
         * @param String component Name of the component
         * @param Function callback Function callback to call when completed
         * @param Number interval Interval in milliseconds for how often to check for an update
         * @return Number
         *
         */
        startMonitor: function(component, callback, interval) {
        }

    }

    ,
    /**
     * An object for holding arrays of bytes.

     * @since 0.7.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes-object.html }
     *
     *
     */
    Bytes: {
        /**
         * Return a character representing a byte at the given index in a Bytes.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.charAt-method.html }
         *
         * @param Number index The index to look for a character at.
         * @return String
         *
         */
        charAt: function(index) {
        }

        ,
        /**
         * Concatenate multiple Bytes and Strings into one Bytes.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.concat-method.html }
         *
         * @param Byte|String ... A variable-length list of Bytes or Strings to concatenate to this Bytes object.
         * @return Bytes
         *
         */
        concat: function() {
        }

        ,
        /**
         * Return the index of a String within this Bytes. The String will first
         * be converted to UTF-8 before this method searches the Bytes object.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.indexOf-method.html }
         *
         * @param String needle The String to search for.
         * @return Number
         *
         */
        indexOf: function(needle) {
        }

        ,
        /**
         * Return the last index of a String within this Bytes. The String will first
         * be converted to UTF-8 before this method searches the Bytes object.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.lastIndexOf-method.html }
         *
         * @param String needle The String to search for
         * @return Number
         *
         */
        lastIndexOf: function(needle) {
        }

        ,
        /**
         * Split a bytes as if it were a String given a delimiter. The Bytes object is
         * expected to contain a UTF-8 encoded String. That means that the first NUL
         * character in the string will be the end of the string.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.split-method.html }
         *
         * @param String delimiter The index to look for a character at
         * @param Number limit (optional) The maximum number of matches to return
         * @return Array
         *
         */
        split: function(delimiter, limit) {
        }

        ,
        /**
         * Return a substring of a Bytes given a start index and a length. This
         * assumes that Bytes contains a UTF-8 string. This means that the first
         * NUL character in the Bytes object will signify the end of the string.
         * If no length index is given, return all characters from the start index
         * to the end of the string.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.substr-method.html }
         *
         * @param Number startIndex The starting index
         * @param Number length (optional) The length of the substring
         * @return String
         *
         */
        substr: function(startIndex, length) {
        }

        ,
        /**
         * Return a substring of a Bytes given a start index and end index. This
         * assumes that Bytes contains a UTF-8 string. This means that the first
         * NUL character in the Bytes object will signify the end of the string.
         * If no end index is given, return all characters from the start index
         * to the end of the string. If startIndex > endIndex, the indices are swapped.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.substring-method.html }
         *
         * @param Number startIndex The starting index
         * @param Number endIndex (optional) The ending index
         * @return String
         *
         */
        substring: function(startIndex, endIndex) {
        }

        ,
        /**
         * Convert characters in the Bytes to lower-case as if it it were a String.
         * This method assumes that Bytes contains a UTF-8 string. This means that the first
         * NUL character in the Bytes object will signify the end of the string.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.toLowerCase-method.html }
         *
         * @return String
         *
         */
        toLowerCase: function() {
        }

        ,
        /**
         * Return a string representation of a Byte object.
         * This method assumes that Bytes contains a UTF-8 string. This means that the first
         * NUL character in the Bytes object will signify the end of the string.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.toString-method.html }
         *
         * @return String
         *
         */
        toString: function() {
        }

        ,
        /**
         * Convert characters in the Bytes to upper-case as if it it were a String.
         * This method assumes that Bytes contains a UTF-8 string. This means that the first
         * NUL character in the Bytes object will signify the end of the string.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Bytes.toUpperCase-method.html }
         *
         * @return String
         *
         */
        toUpperCase: function() {
        }

    }

    ,
    /**
     * A module for network functionality.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network-module }
     *
     *
     */
    Network: {
        /**
         * An object representing an HTTP cookie.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie-object.html }
         *
         *
         */
        HTTPCookie: {
            /**
             * Get the domain for which the cookie is valid

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getDomain-method.html }
             *
             * @return String
             *
             */
            getDomain: function() {
            }

            ,
            /**
             * Get the lifetime of the cookie, in seconds.

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getMaxAge-method.html }
             *
             * @return Integer
             *
             */
            getMaxAge: function() {
            }

            ,
            /**
             * Get the cookie name

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getName-method.html }
             *
             * @return String
             *
             */
            getName: function() {
            }

            ,
            /**
             * Get the subset of URLs to which this cookie applies

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getPath-method.html }
             *
             * @return String
             *
             */
            getPath: function() {
            }

            ,
            /**
             * Get the cookie value

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getValue-method.html }
             *
             * @return String
             *
             */
            getValue: function() {
            }

            ,
            /**
             * Identifies to which version of the state management specification the cookie conforms. 0 = netscape 1 = RFC2109

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.getVersion-method.html }
             *
             * @return Integer
             *
             */
            getVersion: function() {
            }

            ,
            /**
             * Check if the http only flag is set on the cookie

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.isHTTPOnly-method.html }
             *
             * @return Boolean
             *
             */
            isHTTPOnly: function() {
            }

            ,
            /**
             * Check if the secure flag is set on the cookie

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.isSecure-method.html }
             *
             * @return Boolean
             *
             */
            isSecure: function() {
            }

            ,
            /**
             * Set the cookie comment text

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setComment-method.html }
             *
             * @param String comment text to set as comment
             * @return String
             *
             */
            setComment: function(comment) {
            }

            ,
            /**
             * Set the domain for which the cookie is valid

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setDomain-method.html }
             *
             * @param String domain the domain to set
             * @return String
             *
             */
            setDomain: function(domain) {
            }

            ,
            /**
             * Set the http only flag on the cookie

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setHTTPOnly-method.html }
             *
             * @param Boolean enableHTTPOnly if True sets the http only flag
             * @return String
             *
             */
            setHTTPOnly: function(enableHTTPOnly) {
            }

            ,
            /**
             * Set the lifetime of the cookie, in seconds.

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setMaxAge-method.html }
             *
             * @param Integer lifetime the lifetime in seconds. 0 = discard
             * @return String
             *
             */
            setMaxAge: function(lifetime) {
            }

            ,
            /**
             * Set the cookie name

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setName-method.html }
             *
             * @param String name name of the cookie
             * @return String
             *
             */
            setName: function(name) {
            }

            ,
            /**
             * Set the subset of URLs to which this cookie applies

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setPath-method.html }
             *
             * @param String path the path to set
             * @return String
             *
             */
            setPath: function(path) {
            }

            ,
            /**
             * Set the secure flag on the cookie

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setSecure-method.html }
             *
             * @param Boolean enableSecure if True makes the cookie secure
             * @return String
             *
             */
            setSecure: function(enableSecure) {
            }

            ,
            /**
             * Set the cookie value

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setValue-method.html }
             *
             * @param String value value to set cookie
             * @return String
             *
             */
            setValue: function(value) {
            }

            ,
            /**
             * Set the state management specifiction version the cookie conforms. (Default: 0)

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.setVersion-method.html }
             *
             * @param Integer version cookie version (0 or 1)
             * @return String
             *
             */
            setVersion: function(version) {
            }

            ,
            /**
             * return a string representation of the cookie

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPCookie.toString-method.html }
             *
             * @return String
             *
             */
            toString: function() {
            }

        }

        ,
        /**
         * An implementation of an HTTPServer.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServer-object.html }
         *
         *
         */
        HTTPServer: {
            /**
             * close this server

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServer.close-method.html }
             *
             * @return String
             *
             */
            close: function() {
            }

            ,
            /**
             * check to see if this server socket is closed

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServer.isClosed-method.html }
             *
             * @return Boolean
             *
             */
            isClosed: function() {
            }

        }

        ,
        /**
         * An object representing a single HTTP server request.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest-object.html }
         *
         *
         */
        HTTPServerRequest: {
            /**
             * get the content type of this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getContentType-method.html }
             *
             * @return String
             *
             */
            getContentType: function() {
            }

            ,
            /**
             * get an HTTP header value from this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getHeader-method.html }
             *
             * @param String header the header of the request
             * @param String header the header of the request
             * @return String
             *
             */
            getHeader: function(header, header) {
            }

            ,
            /**
             * get an HTTP header value from this request

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getHeaders-method.html }
             *
             * @return String
             *
             */
            getHeaders: function() {
            }

            ,
            /**
             * get the HTTP method of this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getMethod-method.html }
             *
             * @return String
             *
             */
            getMethod: function() {
            }

            ,
            /**
             * get the URI of this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getURI-method.html }
             *
             * @return String
             *
             */
            getURI: function() {
            }

            ,
            /**
             * get the HTTP version of this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.getVersion-method.html }
             *
             * @return String
             *
             */
            getVersion: function() {
            }

            ,
            /**
             * check to see if this request has an HTTP header

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.hasHeader-method.html }
             *
             * @param String header the header of the request to check
             * @return Boolean
             *
             */
            hasHeader: function(header) {
            }

            ,
            /**
             * read content from this request

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerRequest.read-method.html }
             *
             * @param Number length (optional) the number of bytes to read (default 8096)
             * @return String
             *
             */
            read: function(length) {
            }

        }

        ,
        /**
         * An object representing a single HTTP server response.

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse-object.html }
         *
         *
         */
        HTTPServerResponse: {
            /**
             * set the content length of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setContentLength-method.html }
             *
             * @param Number length the content length
             * @return String
             *
             */
            setContentLength: function(length) {
            }

            ,
            /**
             * set the content type of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setContentType-method.html }
             *
             * @param String type the content type, i.e "text/plain"
             * @return String
             *
             */
            setContentType: function(type) {
            }

            ,
            /**
             * set an HTTP header of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setHeader-method.html }
             *
             * @param String name the header name
             * @param String value the header value
             * @return String
             *
             */
            setHeader: function(name, value) {
            }

            ,
            /**
             * set the reason of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setReason-method.html }
             *
             * @param String reason the reason, i.e "OK"
             * @return String
             *
             */
            setReason: function(reason) {
            }

            ,
            /**
             * set the status of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setStatus-method.html }
             *
             * @param String status the status, i.e "200"
             * @return String
             *
             */
            setStatus: function(status) {
            }

            ,
            /**
             * set the status and reason of this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.setStatusAndReason-method.html }
             *
             * @param String status the status, i.e "200"
             * @param String reason the reason, i.e "OK"
             * @return String
             *
             */
            setStatusAndReason: function(status, reason) {
            }

            ,
            /**
             * write content into this response

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.HTTPServerResponse.write-method.html }
             *
             * @param String data content to write (can be string or bytes content)
             * @return String
             *
             */
            write: function(data) {
            }

        }

        ,
        /**
         * An object representing a host on the network.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Host-object.html }
         *
         *
         */
        Host: {
            /**
             * Returns the list of aliases for a Host object

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Host.getAliases-method.html }
             *
             * @return Array
             *
             */
            getAliases: function() {
            }

            ,
            /**
             * Return the hostname of a Host object

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Host.getName-method.html }
             *
             * @return String
             *
             */
            getName: function() {
            }

            ,
            /**
             * Checks whether the Host object is invalid

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Host.isInvalid-method.html }
             *
             * @return Boolean
             *
             */
            isInvalid: function() {
            }

            ,
            /**
             * Returns a string representation of a Host object

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Host.toString-method.html }
             *
             * @return String
             *
             */
            toString: function() {
            }

        }

        ,
        /**
         * An object representing an IP address.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress-object.html }
         *
         *
         */
        IPAddress: {
            /**
             * Check whether an IPAddress object is a global multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isGlobalMC-method.html }
             *
             * @return Boolean
             *
             */
            isGlobalMC: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is an IPv4 address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isIPV4-method.html }
             *
             * @return Boolean
             *
             */
            isIPV4: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is an IPv6 address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isIPV6-method.html }
             *
             * @return Boolean
             *
             */
            isIPV6: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is invalid.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isInvalid-method.html }
             *
             * @return Boolean
             *
             */
            isInvalid: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a link-local address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isLinkLocal-method.html }
             *
             * @return Boolean
             *
             */
            isLinkLocal: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a link-local multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isLinkLocalMC-method.html }
             *
             * @return Boolean
             *
             */
            isLinkLocalMC: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a loopback address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isLoopback-method.html }
             *
             * @return Boolean
             *
             */
            isLoopback: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isMulticast-method.html }
             *
             * @return Boolean
             *
             */
            isMulticast: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a node-local multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isNodeLocalMC-method.html }
             *
             * @return Boolean
             *
             */
            isNodeLocalMC: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is an organization local multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isOrgLocalMC-method.html }
             *
             * @return Boolean
             *
             */
            isOrgLocalMC: function() {
            }

            ,
            /**
             * Check whether an IPAddrss object is a site-local address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isSiteLocal-method.html }
             *
             * @return Boolean
             *
             */
            isSiteLocal: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a site-local multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isSiteLocalMC-method.html }
             *
             * @return Boolean
             *
             */
            isSiteLocalMC: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a unicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isUnicast-method.html }
             *
             * @return Boolean
             *
             */
            isUnicast: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a well-known multicast address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isWellKnownMC-method.html }
             *
             * @return Boolean
             *
             */
            isWellKnownMC: function() {
            }

            ,
            /**
             * Check whether an IPAddress object is a wildcard address.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.isWildcard-method.html }
             *
             * @return Boolean
             *
             */
            isWildcard: function() {
            }

            ,
            /**
             * Return a string representation of an IPAddress object.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.IPAddress.toString-method.html }
             *
             * @return String
             *
             */
            toString: function() {
            }

        }

        ,
        /**
         * No description provided.

         * @since 0.8.5 or earlier
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface-object.html }
         *
         *
         */
        Interface: {
            /**
             * Return the IP addresso of this interface.

             * @since 0.9.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface.getIPAddress-method.html }
             *
             * @return Network.IPAddress
             *
             */
            getIPAddress: function() {
            }

            ,
            /**
             * Get the name of this interface.

             * @since 0.9.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface.getName-method.html }
             *
             * @return String
             *
             */
            getName: function() {
            }

            ,
            /**
             * Return the subnet mask of this interface as a Network.IPAddress object.

             * @since 0.9.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface.getSubnetMask-method.html }
             *
             * @return Network.IPAddress
             *
             */
            getSubnetMask: function() {
            }

            ,
            /**
             * Return true if this interface supports IPv4 and false otherwise.

             * @since 0.9.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface.supportsIPv4-method.html }
             *
             * @return Boolean
             *
             */
            supportsIPv4: function() {
            }

            ,
            /**
             * Return true if this interface supports IPv6 and false otherwise.

             * @since 0.9.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.Interface.supportsIPv6-method.html }
             *
             * @return Boolean
             *
             */
            supportsIPv6: function() {
            }

        }

        ,
        /**
         * An object representing a TCP client socket connection.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket-object.html }
         *
         *
         */
        TCPSocket: {
            /**
             * Connect the Socket object to the host specified during creation. The connection will be made asynchronously. Use onError to detect failures.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.connect-method.html }
             *
             * @return String
             *
             */
            connect: function() {
            }

            ,
            /**
             * Check whether the Socket is closed.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.isClosed-method.html }
             *
             * @return Boolean
             *
             */
            isClosed: function() {
            }

            ,
            /**
             * Set the callback that will be fired when the Socket encounters an error.

             * @since 0.8.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.onError-method.html }
             *
             * @param Function onError Function to be called when an error happens.
             * @return String
             *
             */
            onError: function(onError) {
            }

            ,
            /**
             * Set a callback that will be fired when data is received on the Socket.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.onRead-method.html }
             *
             * @param Function onRead Function to be called when data is received.
             * @return String
             *
             */
            onRead: function(onRead) {
            }

            ,
            /**
             * Set the callback function that will be fired when a read finishes. A read is considered finished if some bytes have been read and a subsequent call to read returns zero bytes.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.onReadComplete-method.html }
             *
             * @param Function onReadComplete Function be called when a read completes.
             * @return String
             *
             */
            onReadComplete: function(onReadComplete) {
            }

            ,
            /**
             * Set the callback that will be fired when an operation times out on the Socket.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.onTimeout-method.html }
             *
             * @param Function onTimeout Function to be called when an operation times out.
             * @return String
             *
             */
            onTimeout: function(onTimeout) {
            }

            ,
            /**
             * Set a callback that will be fired when data is written on the Socket.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.onWrite-method.html }
             *
             * @param Function onWrite Function to be called when data is written.
             * @return String
             *
             */
            onWrite: function(onWrite) {
            }

            ,
            /**
             * Write data to the Socket's connection, if open.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.TCPSocket.write-method.html }
             *
             * @param String data The data to write to the connection.
             * @return Boolean
             *
             */
            write: function(data) {
            }

        }

        ,
        /**
         * Creates an HTTPClient object

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createHTTPClient-method.html }
         *
         * @return Network.HTTPClient
         *
         */
        createHTTPClient: function() {
        }

        ,
        /**
         * Creates a new HTTPCookie object

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createHTTPCookie-method.html }
         *
         * @return Network.HTTPCookie
         *
         */
        createHTTPCookie: function() {
        }

        ,
        /**
         * Creates an HTTPServer object

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createHTTPServer-method.html }
         *
         * @return Network.HTTPServer
         *
         */
        createHTTPServer: function() {
        }

        ,
        /**
         * Creates an IPAddress object

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createIPAddress-method.html }
         *
         * @param String address the IP address
         * @return Network.IPAddress
         *
         */
        createIPAddress: function(address) {
        }

        ,
        /**
         * Creates an IRCClient object

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createIRCClient-method.html }
         *
         * @return Network.IRCClient
         *
         */
        createIRCClient: function() {
        }

        ,
        /**
         * Creates a TCPSocket object

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.createTCPSocket-method.html }
         *
         * @param String host the hostname to connect to
         * @param Number port the port to use
         * @return Network.TCPSocket
         *
         */
        createTCPSocket: function(host, port) {
        }

        ,
        /**
         * Decodes a URI component

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.decodeURIComponent-method.html }
         *
         * @param String value value to decode
         * @return String
         *
         */
        decodeURIComponent: function(value) {
        }

        ,
        /**
         * Encodes a URI Component

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.encodeURIComponent-method.html }
         *
         * @param String value value to encode
         * @return String
         *
         */
        encodeURIComponent: function(value) {
        }

        ,
        /**
         * Return the first IPv4 address in this system's list of interfaces.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getFirstIPAddress-method.html }
         *
         * @return String
         *
         */
        getFirstIPAddress: function() {
        }

        ,
        /**
         * Return the first MAC address in this system's list of interfaces.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getFirstMACAddress-method.html }
         *
         * @return String
         *
         */
        getFirstMACAddress: function() {
        }

        ,
        /**
         * Return the proxy override, if one is set.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getHTTPProxy-method.html }
         *
         * @return String|null
         *
         */
        getHTTPProxy: function() {
        }

        ,
        /**
         * Return the proxy override, if one is set.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getHTTPSProxy-method.html }
         *
         * @return String|null
         *
         */
        getHTTPSProxy: function() {
        }

        ,
        /**
         * Returns a Host object using an address

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getHostByAddress-method.html }
         *
         * @param String address the address
         * @return Network.Host
         *
         */
        getHostByAddress: function(address) {
        }

        ,
        /**
         * Returns a Host object using a hostname

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getHostByName-method.html }
         *
         * @param String name the hostname
         * @return Network.Host
         *
         */
        getHostByName: function(name) {
        }

        ,
        /**
         * Return a list of network interfaces on this system.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.getInterfaces-method.html }
         *
         * @return Array
         *
         */
        getInterfaces: function() {
        }

        ,
        /**
         * Removes a connectivity change listener

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.removeConnectivityListener-method.html }
         *
         * @param Number id the callback id of the method
         * @return String
         *
         */
        removeConnectivityListener: function(id) {
        }

        ,
        /**
         * Override application proxy autodetection with a proxy URL.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.setHTTPProxy-method.html }
         *
         * @param String hostname The full proxy hostname.
         * @return String
         *
         */
        setHTTPProxy: function(hostname) {
        }

        ,
        /**
         * Override application proxy autodetection with a proxy URL.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Network.setHTTPSProxy-method.html }
         *
         * @param String hostname The full proxy hostname.
         * @return String
         *
         */
        setHTTPSProxy: function(hostname) {
        }

    }

    ,
    /**
     * A module for controlling the user interface.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI-module.html }
     *
     *
     */
    UI: {
        /**
         * An object representing a Dialog window.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Dialog-object.html }
         *
         *
         */
        Dialog: {
            /**
             * get results from UI dialog

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Dialog.getDialogResult-method.html }
             *
             * @return String
             *
             */
            getDialogResult: function() {
            }

        }

        ,
        /**
         * An object representing a menu.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu-object.html }
         *
         *
         */
        Menu: {
            /**
             * Add an item to this menu with the given attributes.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.addItem-method.html }
             *
             * @param String label The label for the new item
             * @param Function listener (optional) An event listener callback for the item
             * @param String iconURL The URL for this item's icon
             * @return UI.MenuItem
             *
             */
            addItem: function(label, listener, iconURL) {
            }

            ,
            /**
             * Add a separator item to this menu.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.addSeparatorItem-method.html }
             *
             * @return UI.MenuItem
             *
             */
            addSeparatorItem: function() {
            }

            ,
            /**
             * Append a MenuItem object to a menu.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.appendItem-method.html }
             *
             * @param UI.MenuItem item Append an item to this menu
             * @return String
             *
             */
            appendItem: function(item) {
            }

            ,
            /**
             * Remove all items from this menu.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.clear-method.html }
             *
             * @return String
             *
             */
            clear: function() {
            }

            ,
            /**
             * Get an item from this menu at the given index. This method will throw an exception if the index is out of range.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.getItemAt-method.html }
             *
             * @param Number index The index of the item to get
             * @return UI.MenuItem
             *
             */
            getItemAt: function(index) {
            }

            ,
            /**
             * Get the length of this menu.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.getLength-method.html }
             *
             * @return Number
             *
             */
            getLength: function() {
            }

            ,
            /**
             * Insert a menu item before the given index. This method will throw an exception if the index of out of range.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.insertItemAt-method.html }
             *
             * @param UI.MenuItem item The menu item to insert
             * @param Number index The index for this menu item
             * @return String
             *
             */
            insertItemAt: function(item, index) {
            }

            ,
            /**
             * Remove the item in this menu at the given index. This method will throw an exception if the index is out of range.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Menu.removeItemAt-method.html }
             *
             * @param Number index The index of the item to remove
             * @return String
             *
             */
            removeItemAt: function(index) {
            }

        }

        ,
        /**
         * An object representing a menu item.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem-object.html }
         *
         *
         */
        MenuItem: {
            /**
             * Add an item to this menu item's submenu with the given attributes. If this menu item does not have a submenu, it will be created. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.addItem-method.html }
             *
             * @param String label The label for the new item
             * @param Function listener (optional) An event listener callback for the item
             * @param String iconURL The URL for this item's icon
             * @return UI.MenuItem
             *
             */
            addItem: function(label, listener, iconURL) {
            }

            ,
            /**
             * Add a separator item to this menu item's submenu. If this menu item does not have a submenu, it will be created. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.addSeparatorItem-method.html }
             *
             * @return UI.MenuItem
             *
             */
            addSeparatorItem: function() {
            }

            ,
            /**
             * Disable this item i.e. make it non-clickable. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.disable-method.html }
             *
             * @return String
             *
             */
            disable: function() {
            }

            ,
            /**
             * Enable this item i.e. make it clickable. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.enable-method.html }
             *
             * @return String
             *
             */
            enable: function() {
            }

            ,
            /**
             * This method is only available for check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.getAutoCheck-method.html }
             *
             * @param Boolean autocheck Whether or not this item should is an autocheck
             * @return String
             *
             */
            getAutoCheck: function(autocheck) {
            }

            ,
            /**
             * Get this item's icon URL This method is not available for separator or check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.getIcon-method.html }
             *
             * @return String|null
             *
             */
            getIcon: function() {
            }

            ,
            /**
             * Get this item's label. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.getLabel-method.html }
             *
             * @return String
             *
             */
            getLabel: function() {
            }

            ,
            /**
             * Gets the state of this check item This method is only available for check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.getState-method.html }
             *
             * @return Boolean
             *
             */
            getState: function() {
            }

            ,
            /**
             * Get this item's submenu. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.getSubmenu-method.html }
             *
             * @return UI.Menu|null
             *
             */
            getSubmenu: function() {
            }

            ,
            /**
             * Return true if this UI.MenuItem is a check menu item or false otherwise.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.isCheck-method.html }
             *
             * @return Boolean
             *
             */
            isCheck: function() {
            }

            ,
            /**
             * This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.isEnabled-method.html }
             *
             * @return Boolean
             *
             */
            isEnabled: function() {
            }

            ,
            /**
             * Return true if this UI.MenuItem is seperator menu item or false otherwise.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.isSeparator-method.html }
             *
             * @return Boolean
             *
             */
            isSeparator: function() {
            }

            ,
            /**
             * Set whether or not this check item is an autocheck item. An autocheck item (the default) will automatically flip the state of the check on a a click event. Turning off this behavior makes the check item more useful as a radio button. This method is only available for check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.setAutoCheck-method.html }
             *
             * @param Boolean autocheck Whether or not this item should be an autocheck
             * @return String
             *
             */
            setAutoCheck: function(autocheck) {
            }

            ,
            /**
             * Set the icon URL for this item This method is not available for separator or check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.setIcon-method.html }
             *
             * @param String|null iconURL The new icon URL for this item or null to unset it
             * @return String
             *
             */
            setIcon: function(iconURL) {
            }

            ,
            /**
             * Set the label for this item. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.setLabel-method.html }
             *
             * @param String label The new label for this item
             * @return String
             *
             */
            setLabel: function(label) {
            }

            ,
            /**
             * Sets the state of this check item This method is only available for check items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.setState-method.html }
             *
             * @param Boolean state A True state is checked
             * @return String
             *
             */
            setState: function(state) {
            }

            ,
            /**
             * Set this item's submenu. This method is not available for separator items.

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.MenuItem.setSubmenu-method.html }
             *
             * @param UI.Menu|null menu The submenu to use for this item or null to unset it
             * @return String
             *
             */
            setSubmenu: function(menu) {
            }

        }

        ,
        /**
         * An object representing a TrayItem.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray-object.html }
         *
         *
         */
        Tray: {
            /**
             * Get the icon URL for this TrayItem

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.getIcon-method.html }
             *
             * @return String
             *
             */
            getIcon: function() {
            }

            ,
            /**
             * Get the menu for this TrayItem

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.getMenu-method.html }
             *
             * @return UI.Menu|null
             *
             */
            getMenu: function() {
            }

            ,
            /**
             * Removes a TrayItem

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.remove-method.html }
             *
             * @return String
             *
             */
            remove: function() {
            }

            ,
            /**
             * Sets a TrayItem's tooltip

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.setHint-method.html }
             *
             * @param String hint (optional) tooltip value or null to unset
             * @return String
             *
             */
            setHint: function(hint) {
            }

            ,
            /**
             * Sets a TrayItem's icon

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.setIcon-method.html }
             *
             * @param String icon (optional) path to the icon or null to unset
             * @return String
             *
             */
            setIcon: function(icon) {
            }

            ,
            /**
             * Set the menu for this TrayItem

             * @since 0.6.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.Tray.setMenu-method.html }
             *
             * @param UI.Menu|null menu The Menu to use for this TrayItem or null to unset
             * @return String
             *
             */
            setMenu: function(menu) {
            }

        }

        ,
        /**
         * An object representing a top-level Titanium window.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.UserWindow-object.html }
         *
         *
         */
        UserWindow: {
        }

        ,
        /**
         * Empty the tray of all this application's tray items

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.clearTray-method.html }
         *
         * @return void
         *
         */
        clearTray: function() {
        }

        ,
        /**
         * Create a new CheckMenuItem object.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.createCheckMenuItem-method.html }
         *
         * @param String label The label for this menu item
         * @param Function eventListener (optional) An event listener for this menu item
         * @return UI.CheckMenuItem
         *
         */
        createCheckMenuItem: function(label, eventListener) {
        }

        ,
        /**
         * Create a new menu

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.createMenu-method.html }
         *
         * @return UI.Menu
         *
         */
        createMenu: function() {
        }

        ,
        /**
         * Create a new menu item.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.createMenuItem-method.html }
         *
         * @param String label The label for this menu item
         * @param Function eventListener (optional) An event listener for this menu item
         * @param String iconURL (optional) A URL to an icon to use for this menu item
         * @return UI.MenuItem
         *
         */
        createMenuItem: function(label, eventListener, iconURL) {
        }

        ,
        /**
         * Create a new separator menu item.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.createSeperatorMenuItem-method.html }
         *
         * @return UI.SeparatorMenuItem
         *
         */
        createSeperatorMenuItem: function() {
        }

        ,
        /**
         * Create a new child window of the current window. This means that
         * when the originating window is closed, the new window will be closed
         * as well. If this function is called outside of the context of a window
         * it will create a new top-level window.
         *
         *
         *
         * There are three ways to call this function. You may pass no arguments,
         * in which case the new window will have the same configuration as the
         * originating window. You may also simply pass a new absolute URL:
         * Titanium.UI.createWindow("app://second_page.html");
         * If the URL matches the url or url-regex field of a tiapp.xml window
         * configuration, then the window will use that configuration. For more
         * information see the tiapp.xml guide.
         *
         *
         *
         * A window may also be craeated with an options object. Almost every
         * field in a tiapp.xml window configuration has a corresponding field
         * in the options object. Below is a call which uses every field:
         * Titanium.UI.createWindow({
         *         id: "propertyWindow",
         *         url: "app://second_page.html",
         *         title: "My New Window",
         *         contents: "<html>foo!</html>"
         *         baseURL: "app://page_url"
         *         x: 300,
         *         y: 400,
         *         width: 500,
         *         minWidth: 500,
         *         maxWidth: 500,
         *         height: 500,
         *         minHeight: 500,
         *         maxHeight: 500,
         *         maximizable: true,
         *         minimizable: true,
         *         closeable: true,
         *         resizable: true,
         *         fullscreen: false,
         *         maximized: false,
         *         minimized: false,
         *         usingChrome: true,
         *         topMost: false,
         *         visible: true,
         *         transparentBackground: false,
         *         transparency: false
         *     });
         * For more information on what these properties do, please see the
         * tiapp.xml guide.

         * @since 0.8.1
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.createWindow-method.html }
         *
         * @param String|Object options (optional) A string containing a url of the new window or an object containing properties for the new window
         * @return UI.UserWindow
         *
         */
        createWindow: function(options) {
        }

        ,
        /**
         * Return this application's context menu or null if none is set.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getContextMenu-method.html }
         *
         * @return UI.Menu|null
         *
         */
        getContextMenu: function() {
        }

        ,
        /**
         * Return the current window. This function does not exist outside of the context
         * of a window.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getCurrentWindow-method.html }
         *
         * @return UI.UserWindow
         *
         */
        getCurrentWindow: function() {
        }

        ,
        /**
         * Return the user's idle time (for the desktop, not just the application)

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getIdleTime-method.html }
         *
         * @return Number
         *
         */
        getIdleTime: function() {
        }

        ,
        /**
         * Return the application's main window

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getMainWindow-method.html }
         *
         * @return UI.UserWindow
         *
         */
        getMainWindow: function() {
        }

        ,
        /**
         * Return the application's main MenuItem or null if none is set.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getMenu-method.html }
         *
         * @return UI.Menu|null
         *
         */
        getMenu: function() {
        }

        ,
        /**
         * Return a list of currently open windows.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getOpenWindows-method.html }
         *
         * @return Array
         *
         */
        getOpenWindows: function() {
        }

        ,
        /**
         * Return a list of currently open windows.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.getWindows-method.html }
         *
         * @return Array
         *
         */
        getWindows: function() {
        }

        ,
        /**
         * Set the application icon's badge text.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setBadge-method.html }
         *
         * @param String text The new badge text.
         * @return String
         *
         */
        setBadge: function(text) {
        }

        ,
        /**
         * Set the application icon's badge image.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setBadgeImage-method.html }
         *
         * @param String imageURL URL to the new badge image.
         * @return String
         *
         */
        setBadgeImage: function(imageURL) {
        }

        ,
        /**
         * Set the application's context menu

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setContextMenu-method.html }
         *
         * @param UI.Menu|null menu a MenuItem object or null to unset the menu.
         * @return String
         *
         */
        setContextMenu: function(menu) {
        }

        ,
        /**
         * Set the dock icon

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setDockIcon-method.html }
         *
         * @param String icon path to the icon
         * @return String
         *
         */
        setDockIcon: function(icon) {
        }

        ,
        /**
         * Set the dock menu

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setDockMenu-method.html }
         *
         * @param UI.Menu menu The new menu for the dock or null to unset the menu.
         * @return String
         *
         */
        setDockMenu: function(menu) {
        }

        ,
        /**
         * Set the application's icon

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setIcon-method.html }
         *
         * @param String menu path to the icon
         * @return String
         *
         */
        setIcon: function(menu) {
        }

        ,
        /**
         * Set a menu for the application

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.setMenu-method.html }
         *
         * @param UI.Menu|null menu A Menu object to use as the menu or null to unset the menu.
         * @return String
         *
         */
        setMenu: function(menu) {
        }

        ,
        /**
         * create a UI dialog

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.UI.showDialog-method.html }
         *
         * @param Object params options to pass in to create window
         * @return UI.Dialog
         *
         */
        showDialog: function(params) {
        }

    }

    ,
    /**
     * A module for creating Worker threads.

     * @since 0.6.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Worker-module }
     *
     *
     */
    Worker: {
    }

    ,
    /**
     * A module for displaying desktop notifications.

     * @since 0.4.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Notification-module }
     *
     *
     */
    Notification: {
    }

    ,
    /**
     * A module for holding core Titanium functionality.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API-module }
     *
     *
     */
    API: {
        /**
         * An object representing a Titanium component, which may be either a module,
         * runtime, SDK, Mobile SDK or application update.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component-object.html }
         *
         *
         */
        Component: {
            /**
             * Get the path to this component.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component.getPath-method.html }
             *
             * @return String
             *
             */
            getPath: function() {
            }

            ,
            /**
             * Get the type of this component. Component types are defined as constants on the API module.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component.getType-method.html }
             *
             * @return Number
             *
             */
            getType: function() {
            }

            ,
            /**
             * Get the version of this component. Note that bundled components do not currently have a version.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component.getVersion-method.html }
             *
             * @return String
             *
             */
            getVersion: function() {
            }

            ,
            /**
             * Whether or not this component is bundled with an application.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component.isBundled-method.html }
             *
             * @return Boolean
             *
             */
            isBundled: function() {
            }

            ,
            /**
             * Whether or not this component is currently loaded.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Component.isLoaded-method.html }
             *
             * @return Boolean
             *
             */
            isLoaded: function() {
            }

        }

        ,
        /**
         * An object representing a Titanium application dependency.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Dependency-object.html }
         *
         *
         */
        Dependency: {
            /**
             * Get the requirement for this dependency. Dependency requirement types are defined as constants on the API module. Currently the installer only support API.EQ dependency types.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Dependency.getRequirement-method.html }
             *
             * @return String
             *
             */
            getRequirement: function() {
            }

            ,
            /**
             * Get the type of this dependency. Dependency types are defined as constants on the API module (e.g. API.SDK).

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Dependency.getType-method.html }
             *
             * @return Number
             *
             */
            getType: function() {
            }

            ,
            /**
             * Get the version part of this dependency.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Dependency.getVersion-method.html }
             *
             * @return String
             *
             */
            getVersion: function() {
            }

        }

        ,
        /**
         * Script object.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script-object.html }
         *
         *
         */
        Script: {
            /**
             * None

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script.canEvaluate-method.html }
             *
             * @param Object evaluator The mimeType to check
             * @return bool
             *
             */
            canEvaluate: function(evaluator) {
            }

            ,
            /**
             * None

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script.canPreprocess-method.html }
             *
             * @param String url The URL to check
             * @return bool
             *
             */
            canPreprocess: function(url) {
            }

            ,
            /**
             * Evaluates a string of code

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script.evaluate-method.html }
             *
             * @param String mimeType The code's mime type (i.e. "text/ruby", "text/php")
             * @param String name The name of the code's origin (usually a filename, or URL)
             * @param String code The actual code
             * @param Object scope global variable scope (i.e. "window")
             * @return Any
             *
             */
            evaluate: function(mimeType, name, code, scope) {
            }

            ,
            /**
             * Runs an app URL through preprocessing, returning the result as a string

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script.preprocess-method.html }
             *
             * @param String URL the URL for this resource (app
             * @param Object scope global variable scope to expose into the preprocessed file
             * @return String
             *
             */
            preprocess: function(URL, scope) {
            }

            ,
            /**
             * Removes a script evalutor

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.Script.removeScriptEvaluator-method.html }
             *
             * @param Object evaluator The evaluator to remove
             * @return String
             *
             */
            removeScriptEvaluator: function(evaluator) {
            }

        }

        ,
        /**
         * Create a Kroll Bytes object given a String. A Bytes object is a generic
         * way of holding a String of bytes.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.createBytes-method.html }
         *
         * @param String contents (optional) The contents of the new Bytes. The String will be converted to a
         UTF-8 String before populating the Bytes object. If no String is given the
         object will be empty.
         * @return Bytes
         *
         */
        createBytes: function(contents) {
        }

        ,
        /**
         * A constructor for API.Dependency objects.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.createDependency-method.html }
         *
         * @param Number type The type of this dependency. This is usually one of the component type constants (e.g. API.MODULE).
         * @param String name The name of this dependency.
         * @param String version The version requirement for this dependency.
         * @param Number requirement (optional) The requirement for this dependency. This is one of the requirement specification constants from the API module such as API.LT (less-than)]
         * @return API.Dependency
         *
         */
        createDependency: function(type, name, version, requirement) {
        }

        ,
        /**
         * Create a Kroll list given an optional JavaScript array. This method is mainly used for testing.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.createKList-method.html }
         *
         * @param Array toWrap (optional) An Array to wrap in a new KList.
         * @return Array
         *
         */
        createKList: function(toWrap) {
        }

        ,
        /**
         * Create a Kroll method given an existing JavaScript Funtion. This method is mainly used for testing.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.createKMethod-method.html }
         *
         * @param Function toWrap (optional) A Function to wrap in a new KMethod.
         * @return Function
         *
         */
        createKMethod: function(toWrap) {
        }

        ,
        /**
         * Create a Kroll object given an existing JavaScript Object. This method is mainly used for testing.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.createKObject-method.html }
         *
         * @param Object toWrap (optional) An Object to wrap in a new KObject.
         * @return Object
         *
         */
        createKObject: function(toWrap) {
        }

        ,
        /**
         * Log a statement with CRITICAL severity.
         * The severity levels in order from least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.critical-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        critical: function(statement) {
        }

        ,
        /**
         * Log a statement with DEBUG severity. The severity levels in order from
         * least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.debug-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        debug: function(statement) {
        }

        ,
        /**
         * Log a statement with ERROR severity.
         * The severity levels in order from least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.error-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        error: function(statement) {
        }

        ,
        /**
         * Log a statement with FATAL severity.
         * The severity levels in order from least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.fatal-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        fatal: function(statement) {
        }

        ,
        /**
         * Fire an event to the top-level event listener.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.fireEvent-method.html }
         *
         * @param String|Object event The name of the event to fire or the event object itself
         * @return void
         *
         */
        fireEvent: function(event) {
        }

        ,
        /**
         * Get an attribute in the global object

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.get-method.html }
         *
         * @param String key Key of the attribute to get
         * @return Any
         *
         */
        get: function(key) {
        }

        ,
        /**
         * Get the currently running application. This application will
         * should have all of its dependencies resolved.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getApplication-method.html }
         *
         * @return API.Application
         *
         */
        getApplication: function() {
        }

        ,
        /**
         * Get a list of the paths on which Titanium searches for installed components. This does not include paths of bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getComponentSearchPaths-method.html }
         *
         * @return Array
         *
         */
        getComponentSearchPaths: function() {
        }

        ,
        /**
         * Get the system environment object, which can be queried and updated
         * just by accessing or setting its properties.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getEnvironment-method.html }
         *
         * @return API.Environment
         *
         */
        getEnvironment: function() {
        }

        ,
        /**
         * Get a list of the currently installed Titanium components.
         * An installed component is one that has been found on the list of paths
         * returned by Titanium.API.getComponentSearchPaths. This list does not
         * include bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getInstalledComponents-method.html }
         *
         * @return Array
         *
         */
        getInstalledComponents: function() {
        }

        ,
        /**
         * Get a list of the currently installed Titanium Mobile SDK components.
         * An installed component is one that has been found on the list of paths
         * returned by Titanium.API.getComponentSearchPaths. This list does not
         * include bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getInstalledMobileSDKs-method.html }
         *
         * @return Array
         *
         */
        getInstalledMobileSDKs: function() {
        }

        ,
        /**
         * Get a list of the currently installed Titanium module components.
         * An installed component is one that has been found on the list of paths
         * returned by Titanium.API.getComponentSearchPaths. This list does not
         * include bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getInstalledModules-method.html }
         *
         * @return Array
         *
         */
        getInstalledModules: function() {
        }

        ,
        /**
         * Get a list of the currently installed Titanium runtime components.
         * An installed component is one that has been found on the list of paths
         * returned by Titanium.API.getComponentSearchPaths. This list does not
         * include bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getInstalledRuntimes-method.html }
         *
         * @return Array
         *
         */
        getInstalledRuntimes: function() {
        }

        ,
        /**
         * Get a list of the currently installed Titanium SDK components.
         * An installed component is one that has been found on the list of paths
         * returned by Titanium.API.getComponentSearchPaths. This list does not
         * include bundled components.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getInstalledSDKs-method.html }
         *
         * @return Array
         *
         */
        getInstalledSDKs: function() {
        }

        ,
        /**
         * Get the log level threshold of the Titanium logger. The logger
         * will log statements with this severity or one that is more severe.
         * The severity levels in order from least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.getLogLevel-method.html }
         *
         * @return Number
         *
         */
        getLogLevel: function() {
        }

        ,
        /**
         * Log a statement with INFO severity. The severity levels in order from
         * least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.info-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        info: function(statement) {
        }

        ,
        /**
         * Invoke the installer to find and install a list of dependencies. When
         * the installer is finished running, it will call the given callback.
         * The only way to determine whether or not the installation was successful
         * at this point is to try to resolve the dependencies that were passed
         * to the installer. Currently the installer only supports Titanium.API.EQ
         * dependencies.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.installDependencies-method.html }
         *
         * @param Array dependencies A list of API.Dependency to find and install.
         * @param Function callback A callback to invoke when the installer is finished.
         * @return void
         *
         */
        installDependencies: function(dependencies, callback) {
        }

        ,
        /**
         * Log a statement with a given severity level. The severity levels are
         * defined as constants on the API module.
         * In order from least severe to most severe, they are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.log-method.html }
         *
         * @param Number type The severity of this log statement.
         * @param String statement The String to pass to the logger.
         * @return void
         *
         */
        log: function(type, statement) {
        }

        ,
        /**
         * Log a statement with NOTICE severity. The severity levels in order from
         * least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.notice-method.html }
         *
         * @param String statement the statement to log
         * @return void
         *
         */
        notice: function(statement) {
        }

        ,
        /**
         * Print a String to stdout without a trailing newline

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.print-method.html }
         *
         * @param Any data The data to print. If not a String
         * @return void
         *
         */
        print: function(data) {
        }

        ,
        /**
         * Read an application manifest at a given path and return an
         * Titanium.API.Application object representing the application.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.readApplicationManifest-method.html }
         *
         * @param String manifestPath The path to the manifest to read.
         * @param String applicationPath (optional) An optional application path override
         * @return API.Application
         *
         */
        readApplicationManifest: function(manifestPath, applicationPath) {
        }

        ,
        /**
         * Remove a root event listener. If no listener with the given id or
         * funtion is registered for this object, the call will do nothing.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.removeEventListener-method.html }
         *
         * @param Number|Function id The id or the Function of the event listener to remove.
         * @return void
         *
         */
        removeEventListener: function(id) {
        }

        ,
        /**
         * Execute the method asynchronously on the main thread. This should be
         * used when attempting to run JavaScript methods from non-JavaScript threads.
         * This method blocks until the function finishes executing and returns
         * the return value of the method passed.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.runOnMainThread-method.html }
         *
         * @param Function method The method to execute.
         * @param Any ... A variable-length list of arguments to pass to the method.
         * @return Any
         *
         */
        runOnMainThread: function(method) {
        }

        ,
        /**
         * Execute the method asynchronously on the main thread. This should be
         * used when attempting to run JavaScript methods from non-JavaScript threads.
         * This method does not wait for the method to complete and returns immediately.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.runOnMainThreadAsync-method.html }
         *
         * @param Function method The method to execute.
         * @param Any ... A variable-length list of arguments to pass to the method.
         * @return void
         *
         */
        runOnMainThreadAsync: function(method) {
        }

        ,
        /**
         * Set an attribute in the global object

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.set-method.html }
         *
         * @param String key Key of the attribute to set
         * @param String value New value of the attribute
         * @return void
         *
         */
        set: function(key, value) {
        }

        ,
        /**
         * Set the log level threshold of the Titanium logger. The logger
         * will log statements with this severity or one that is more severe.
         * The severity levels in order from least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.setLogLevel-method.html }
         *
         * @param Number level The threshold of severity to log.
         * @return void
         *
         */
        setLogLevel: function(level) {
        }

        ,
        /**
         * Log a statement with TRACE severity. The severity levels in order from
         * least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.trace-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        trace: function(statement) {
        }

        ,
        /**
         * Log a statement with WARN severity. The severity levels in order from
         * least severe to most severe are:
         *
         *     TRACE
         *     DEBUG
         *     INFO
         *     NOTICE
         *     WARN
         *     ERROR
         *     CRITICAL
         *     FATAL

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.API.warn-method.html }
         *
         * @param String statement The String to send to the logger.
         * @return void
         *
         */
        warn: function(statement) {
        }

    }

    ,
    /**
     * A module for dealing with media.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Media-module }
     *
     *
     */
    Media: {
        /**
         * Factory method for Sound objects, created given a path or a URL to a sound file.
         * The types of sound files that can be played depend on the codecs installed on the
         * user's system.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Media.createSound-method.html }
         *
         * @param String path The path or url to the sound file to play.
         * @return Media.Sound
         *
         */
        createSound: function(path) {
        }

    }

    ,
    /**
     * A module for exposing platform-specific functionality.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform-module.html }
     *
     *
     */
    Platform: {
        /**
         * Get a String representation of the current system's architecture.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getArchitecture-method.html }
         *
         * @return String
         *
         */
        getArchitecture: function() {
        }

        ,
        /**
         * Get the per-user machine identifier of this session.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getMachineId-method.html }
         *
         * @return String
         *
         */
        getMachineId: function() {
        }

        ,
        /**
         * Get the name of this platform.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getName-method.html }
         *
         * @return String
         *
         */
        getName: function() {
        }

        ,
        /**
         * Return the operating system architecture type of this system. This
         * value will be either '32bit' or '64bit.'

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getOSType-method.html }
         *
         * @return String
         *
         */
        getOSType: function() {
        }

        ,
        /**
         * Return the number of processors on this system.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getProcessorCount-method.html }
         *
         * @return Number
         *
         */
        getProcessorCount: function() {
        }

        ,
        /**
         * Return the username of the current user.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getUsername-method.html }
         *
         * @return String
         *
         */
        getUsername: function() {
        }

        ,
        /**
         * Return the version of this system's operating system.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.getVersion-method.html }
         *
         * @return String
         *
         */
        getVersion: function() {
        }

        ,
        /**
         * Open the given application or file in the system's default program.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.openApplication-method.html }
         *
         * @param String name The name or path to the application or file to open.
         * @return String
         *
         */
        openApplication: function(name) {
        }

        ,
        /**
         * Open the given URL in the system's default browser.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.openURL-method.html }
         *
         * @param String url the URL to open.
         * @return String
         *
         */
        openURL: function(url) {
        }

        ,
        /**
         * Take a PNG screenshot of the root window and save it to the given filename.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Platform.takeScreenshot-method.html }
         *
         * @param String filename The filename to write the image to.
         * @return String
         *
         */
        takeScreenshot: function(filename) {
        }

    }

    ,
    /**
     * A module for accessing the Filesystem.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem-module.html }
     *
     *
     */
    Filesystem: {
        /**
         * An object which represents a path to a file or directory. A Filesystem.File is not guaranteed to be a valid path.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File-object.html }
         *
         *
         */
        File: {
            /**
             * Create a new directory at this File object's path. If the
             * directory already exists, this method will do nothing. This
             * method will return true if the directory was created or false
             * if it was not.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.createDirectory-method.html }
             *
             * @return Boolean
             *
             */
            createDirectory: function() {
            }

            ,
            /**
             * Creates a shortcut to a file or directory at this Filesystem.File's
             * path. On Windows this will create a Win32 style shortcut. On Linux
             * and OS X this will create a symlink. If the operation is successful
             * this method will return true and false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.createShortcut-method.html }
             *
             * @param String|Filesystem.File target The target of this shortcut.
             * @return Boolean
             *
             */
            createShortcut: function(target) {
            }

            ,
            /**
             * Return the timestamp for when this file or directory was created.
             * The return value of this function will be microseconds since the
             * epoch at the time this file was created.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.createTimestamp-method.html }
             *
             * @return Number
             *
             */
            createTimestamp: function() {
            }

            ,
            /**
             * Remove the file or directory specified by this Filesystem.File.
             * Return true if removal succeeded and false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.deleteDirectory-method.html }
             *
             * @param Boolean recursive If this Filesystem.File is a directory
             * @return Boolean
             *
             */
            deleteDirectory: function(recursive) {
            }

            ,
            /**
             * Remove the file or directory specified by this Filesystem.File,
             * this method never removes directories recursively.
             * Return true if removal succeeded and false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.deleteFile-method.html }
             *
             * @return String
             *
             */
            deleteFile: function() {
            }

            ,
            /**
             * Return true if a file or directory exists at the path
             * specified by this Filesystem.File.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.exists-method.html }
             *
             * @return Boolean
             *
             */
            exists: function() {
            }

            ,
            /**
             * Return the extension of this Filesystem.File.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.extension-method.html }
             *
             * @return String
             *
             */
            extension: function() {
            }

            ,
            /**
             * If this Filesystem.File specifies the path to a directory,
             * return an Array of items inside this directory. If this path
             * does not exist or is not a directory, return null.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.getDirectoryListing-method.html }
             *
             * @return Array
             *
             */
            getDirectoryListing: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a directory or false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isDirectory-method.html }
             *
             * @return Boolean
             *
             */
            isDirectory: function() {
            }

            ,
            /**
             * Return true if the directory or file at the path specified by
             * this Filesystem.File object has the executable bit set. If the
             * file does not exists, this method will return false.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isExecutable-method.html }
             *
             * @return Boolean
             *
             */
            isExecutable: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a file or false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isFile-method.html }
             *
             * @return Boolean
             *
             */
            isFile: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a hidden file. On Windows this means that the file has the hidden
             * attribute and on Linux and OS X this means that the basename of
             * this path begins with a period.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isHidden-method.html }
             *
             * @return Boolean
             *
             */
            isHidden: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a read-only file.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isReadonly-method.html }
             *
             * @return String
             *
             */
            isReadonly: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a symbolic link.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isSymbolicLink-method.html }
             *
             * @return Boolean
             *
             */
            isSymbolicLink: function() {
            }

            ,
            /**
             * Return true if the path specified by this Filesystem.File refers
             * to a writable file and false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.isWritable-method.html }
             *
             * @return Boolean
             *
             */
            isWritable: function() {
            }

            ,
            /**
             * Return the timestamp for when this file or directory was modified.
             * The return value of this function will be microseconds since the
             * epoch at the last time this file was modified.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.modificationTimestamp-method.html }
             *
             * @return Number
             *
             */
            modificationTimestamp: function() {
            }

            ,
            /**
             * Moves to the specified location. If the target is a directory
             * the file will be written to that directory. If the target is a file,
             * the file will be written to that file.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.move-method.html }
             *
             * @param String|Filesystem.File target The target of this move operation.
             * @return String
             *
             */
            move: function(target) {
            }

            ,
            /**
             * Return the full path of this File.Filesystem object.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.nativePath-method.html }
             *
             * @return String
             *
             */
            nativePath: function() {
            }

            ,
            /**
             * Create and open a Filestream for this File object.

             * @since 1.1.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.open-method.html }
             *
             * @param Number mode (optional) The mode to use for opening this Filesystem.File. This
             is either Filesystem.MODE_READ or Filesystem.MODE_WRITE. If not supplied
             the stream will be open in MODE_READ.
             * @param Boolean binary (optional) Whether or not to open this stream in binary mode. If not supplied this will be false.
             * @param Boolean append (optional) Whether or not to open this stream in append mode. If not supplied this will be false.
             * @return Filesystem.Filestream
             *
             */
            open: function(mode, binary, append) {
            }

            ,
            /**
             * Return the parent directory of this File.Filesystem object.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.parent-method.html }
             *
             * @return Filesystem.File
             *
             */
            parent: function() {
            }

            ,
            /**
             * Return the entire contents of a file as a Bytes object.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.read-method.html }
             *
             * @return Bytes
             *
             */
            read: function() {
            }

            ,
            /**
             * Return one line from the file specified by this Filesystem.File object.
             * This method will return null when it finishes reading the file or if
             * it encounters and error. The file object will remain in an open state until
             * the entire file has been read via Filestream.File.readLine. It is recommended
             * that new applications use Filesystem.Filestream to read files instead, which
             * allow for explicit control over the native file handles.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.readLine-method.html }
             *
             * @return String
             *
             */
            readLine: function() {
            }

            ,
            /**
             * Renames a file to the given path.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.rename-method.html }
             *
             * @param String newPath The new path of the file
             * @return String
             *
             */
            rename: function(newPath) {
            }

            ,
            /**
             * Resolves a given relative path against the path specified by this
             * Filesystem.File object. If the given path is absolute, the absolute
             * path is returned.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.resolve-method.html }
             *
             * @param String subPath The subPath to resolve against this Filesystem.File object.
             * @return Filesystem.File
             *
             */
            resolve: function(subPath) {
            }

            ,
            /**
             * Set the execute bit on the file or directory at the path specified
             * by this Filesystem.File object. Return true if the file or directory
             * at this path is executable after the operation completes.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.setExecutable-method.html }
             *
             * @return Boolean
             *
             */
            setExecutable: function() {
            }

            ,
            /**
             * Remove the wrtiable bit and ensure there is a readable bit on the file
             * or directory at the path specified by this Filesystem.File object. Return
             * true if the file or directory at this path is read-only after the operation
             * completes.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.setReadonly-method.html }
             *
             * @return Boolean
             *
             */
            setReadonly: function() {
            }

            ,
            /**
             * Set the write bit on the file or directory at the path specified
             * by this Filesystem.File object. Return true if the file or directory
             * at this path is writable after the operation completes.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.setWritable-method.html }
             *
             * @return Boolean
             *
             */
            setWritable: function() {
            }

            ,
            /**
             * Return the size of the file in number of bytes.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.size-method.html }
             *
             * @return Number
             *
             */
            size: function() {
            }

            ,
            /**
             * Return the space available on the filesystem containing the
             * path specified by this Filesystem.File object in number of
             * bytes..

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.spaceAvailable-method.html }
             *
             * @return Number
             *
             */
            spaceAvailable: function() {
            }

            ,
            /**
             * Return the path of this Filesystem.File object as a String.

             * @since 0.7.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.toString-method.html }
             *
             * @return String
             *
             */
            toString: function() {
            }

            ,
            /**
             * Creates a new, empty file in an atomic operation.
             * Returns true if the file was created or false if it already exists.

             * @since 1.1.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.touch-method.html }
             *
             * @return Boolean
             *
             */
            touch: function() {
            }

            ,
            /**
             * If this file is a zip file, unzip it into the given destination directory.
             * Return true if the operation was successful or false otherwise. This operation
             * will block the main thread.

             * @since 0.3.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.unzip-method.html }
             *
             * @param Filesystem.File|String destination Directory to unzip the file to.
             * @return Boolean
             *
             */
            unzip: function(destination) {
            }

            ,
            /**
             * Write data to the file at the path specified by this Filesystem.File
             * object. Returns true if any data was written to the file or false
             * otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.File.write-method.html }
             *
             * @param String|Bytes|Number data The data to write to this Filesystem.File.
             * @return String
             *
             */
            write: function(data) {
            }

        }

        ,
        /**
         * A object for reading and writing data to files.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream-object.html }
         *
         *
         */
        Filestream: {
            /**
             * Return true if this Fileystem.Filestream is open and false otherwise.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.isOpen-method.html }
             *
             * @return Boolean
             *
             */
            isOpen: function() {
            }

            ,
            /**
             * Open this Filesystem.Filestream. Return true if the operation is
             * successful or false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.open-method.html }
             *
             * @param Number mode (optional) The mode to use for opening this Filesystem.Filestream. This
             is either Filesystem.MODE_READ or Filesystem.MODE_WRITE. If not supplied
             the stream will be open in MODE_READ.
             * @param Boolean binary (optional) Whether or not to open this stream in binary mode. If not supplied this will be false.
             * @param Boolean append (optional) Whether or not to open this stream in append mode. If not supplied this will be false.
             * @return Boolean
             *
             */
            open: function(mode, binary, append) {
            }

            ,
            /**
             * Read data from a Filesystem.Filestream into a Bytes object
             * and return it. This method will throw an exception if the
             * operation fails.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.read-method.html }
             *
             * @param Integer size Number of bytes to read from the file.
             * @return Bytes
             *
             */
            read: function(size) {
            }

            ,
            /**
             * Reads one line from this Filesystem.Filestream. The stream must
             * be open before using this method (or an exception will be thrown).
             * Each call will return a Bytes object until the end of the stream,
             * when null will be returned.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.readLine-method.html }
             *
             * @return Bytes|null
             *
             */
            readLine: function() {
            }

            ,
            /**
             * Return true if this Filesystem.Filestream is ready for IO operations or false otherwise.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.ready-method.html }
             *
             * @return Boolean
             *
             */
            ready: function() {
            }

            ,
            /**
             * Set the current read/write position with in the file.

             * @since 1.1.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.seek-method.html }
             *
             * @param Integer offset new position relative to the absolute position specifed by the dir parameter
             * @param Integer dir specifies an absolute position in the file where offset will be applied
             * @return void
             *
             */
            seek: function(offset, dir) {
            }

            ,
            /**
             * Returns current position in file relative to the beginning

             * @since 1.1.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.tell-method.html }
             *
             * @return Integer
             *
             */
            tell: function() {
            }

            ,
            /**
             * Writes a line to this Filesystem.Filestream. Return true if this
             * operation succeeds and false otherwise.

             * @since 0.2.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.write-method.html }
             *
             * @param String|Bytes|Number data The data to write to this Filesystem.Filestream.
             * @return Boolean
             *
             */
            write: function(data) {
            }

            ,
            /**
             * Writes a line to this Filesystem.Filestream. The data will be followed
             * by the platform dependent line-ending sequence. Return true if this
             * operation succeeds and false otherwise.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.Filestream.writeLine-method.html }
             *
             * @param String|Bytes|Number data The data to write to this Filesystem.Filestream.
             * @return Boolean
             *
             */
            writeLine: function(data) {
            }

        }

        ,
        /**
         * Create a temporary directory. This directory is guaranteed to be
         * writable. If it still exists when the application exits, it
         * will be deleted.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.createTempDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        createTempDirectory: function() {
        }

        ,
        /**
         * Create an temporary file. This file is guaranteed to be
         * writable. If it still exists when the application exits, it
         * will be deleted.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.createTempFile-method.html }
         *
         * @return Filesystem.File
         *
         */
        createTempFile: function() {
        }

        ,
        /**
         * Return the data directory of the application. The data directory is per-user
         * directory for storing application data. It is guaranteed to be writable and
         * stable between releases.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getApplicationDataDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getApplicationDataDirectory: function() {
        }

        ,
        /**
         * Return the directory containing the application. The application directory
         * may contain the application contents directory (OS X) or be the application
         * contents directory (Windows and Linux). The application directory may not
         * be writable and applications should not attempt to write to it.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getApplicationDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getApplicationDirectory: function() {
        }

        ,
        /**
         * Return the Desktop directory for the current user. OS X and Windows will
         * always have a valid Desktop directory. Some Linux systems may not have one,
         * in which case the home directory will be returned.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getDesktopDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getDesktopDirectory: function() {
        }

        ,
        /**
         * Return the documents directory for the current user. OS X and Windows will
         * always have a valid Documents directory. Some Linux systems may not have one,
         * in which case the home directory will be returned.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getDocumentsDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getDocumentsDirectory: function() {
        }

        ,
        /**
         * Create a Filesystem.File object given a variable-length argument list
         * of Filesystem.File or a path strings. The list will be joined together
         * to form one long path string.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getFile-method.html }
         *
         * @param Filesystem.File|String base The base to this file. This may be a file or directory.
         * @param Filesystem.File|String ... (optional) A variable length argument list of Files or paths that are joined to the base in an platform-specific way.
         * @return Filesystem.File
         *
         */
        getFile: function(base) {
        }

        ,
        /**
         * Create a Filesystem.Filestream object given a Filesystem.File or a path.
         * Filesystem.Filestream is the preferred way of writing to files.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getFileStream-method.html }
         *
         * @param Filesystem.File|String file A file or path used for the construction of this Filesystem.Filestream.
         * @return Filesystem.Filestream
         *
         */
        getFileStream: function(file) {
        }

        ,
        /**
         * Return the line ending most commonly used by the current operating system.
         * This is useful for writing files with the platform compatibility in mind.
         * File.Filestream.writeLine will use this value when completing lines.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getLineEnding-method.html }
         *
         * @return String
         *
         */
        getLineEnding: function() {
        }

        ,
        /**
         * Return the directory commonly used for storing applications on this
         * platform. On Linux systems, there can be many places for storing
         * executables, so it is not recommended using this value to locate them.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getProgramsDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getProgramsDirectory: function() {
        }

        ,
        /**
         * Return the path to this application's resources directory. This diretory
         * is the 'Resources' subdirectory of the application contents directory.
         * The application directory may not be writable and applications should
         * not attempt to write to it.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getResourcesDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getResourcesDirectory: function() {
        }

        ,
        /**
         * Return the system root directories. On Unix systems there is at
         * most one root directory '/' while on Windows active drive letters
         * are considered system root directories.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getRootDirectories-method.html }
         *
         * @return Array
         *
         */
        getRootDirectories: function() {
        }

        ,
        /**
         * Return the directory of the current Titanium runtime files.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getRuntimeHomeDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getRuntimeHomeDirectory: function() {
        }

        ,
        /**
         * Return the path separator used by the operating system.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getSeparator-method.html }
         *
         * @return String
         *
         */
        getSeparator: function() {
        }

        ,
        /**
         * Return the home directory of the current user.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Filesystem.getUserDirectory-method.html }
         *
         * @return Filesystem.File
         *
         */
        getUserDirectory: function() {
        }

    }

    ,
    /**
     * The Titanium Analytics module used for recording analytics events.

     * @since 0.7.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Analytics-module.html }
     *
     *
     */
    Analytics: {
        /**
         * Send an analytics event associated with application navigation.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Analytics.navEvent-method.html }
         *
         * @param String from Navigation starting point, the context we're leaving.
         * @param String to Navigation ending point, the context to which we're going.
         * @param String name Event name.
         * @param Object data Extra event data to pass along. This will be converted to JSON.
         * @return void
         *
         */
        navEvent: function(from, to, name, data) {
        }

        ,
        /**
         * Send an analytics event associated with application settings or configuration

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Analytics.settingsEvent-method.html }
         *
         * @param String name Setting name.
         * @param Object data Extra event data to pass along. This will be converted to JSON.
         * @return String
         *
         */
        settingsEvent: function(name, data) {
        }

        ,
        /**
         * Send an analytics event tracking the duration of an application action

         * @since 0.3.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Analytics.timedEvent-method.html }
         *
         * @param String event Event name
         * @param Date start Event start time (optional if duration is specified).
         * @param Date stop Event stop time (optional if duration is specified).
         * @param Number duration Duration in seconds (optional if both start and stop are specified)
         * @param Object data Extra event data to pass along. This will be converted to JSON.
         * @return String
         *
         */
        timedEvent: function(event, start, stop, duration, data) {
        }

        ,
        /**
         * Send an analytics event not covered by the other interfaces.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Analytics.userEvent-method.html }
         *
         * @param String name Event name.
         * @param Object data Extra event data to pass along. This will be converted to JSON.
         * @return String
         *
         */
        userEvent: function(name, data) {
        }

    }

    ,
    /**
     * A module for creating processes.

     * @since 0.5.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process-module }
     *
     *
     */
    Process: {
        /**
         * An object representing a process instance.

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process-object.html }
         *
         *
         */
        Process: {
            /**
             * Return the list of arguments associated with this Process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getArguments-method.html }
             *
             * @return Array
             *
             */
            getArguments: function() {
            }

            ,
            /**
             * Return the environment associated with this process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getEnvironment-method.html }
             *
             * @param String key an environment key
             * @return String|Object
             *
             */
            getEnvironment: function(key) {
            }

            ,
            /**
             * Return the exit code for this process. Before the process exits, this value will be null.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getExitCode-method.html }
             *
             * @return Number
             *
             */
            getExitCode: function() {
            }

            ,
            /**
             * Return the process identifier for this process. Before the process launches, this value will be -1.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getPID-method.html }
             *
             * @return Number
             *
             */
            getPID: function() {
            }

            ,
            /**
             * Return the stderr pipe for this process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getStderr-method.html }
             *
             * @return Process.Pipe
             *
             */
            getStderr: function() {
            }

            ,
            /**
             * Return the stdin pipe for this process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getStdin-method.html }
             *
             * @return Process.Pipe
             *
             */
            getStdin: function() {
            }

            ,
            /**
             * Return the stdout pipe for this process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.getStdout-method.html }
             *
             * @return Process.Pipe
             *
             */
            getStdout: function() {
            }

            ,
            /**
             * Return true if this process is running and false otherwise.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.isRunning-method.html }
             *
             * @return Boolean
             *
             */
            isRunning: function() {
            }

            ,
            /**
             * Kill this process (SIGINT in Unix, TerminateProcess in Windows)

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.kill-method.html }
             *
             * @return String
             *
             */
            kill: function() {
            }

            ,
            /**
             * Launch this process asynchronously (not waiting for it's exit)

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.launch-method.html }
             *
             * @return String
             *
             */
            launch: function() {
            }

            ,
            /**
             * Send a signal (e.g. Process.SIGHUP) to this Process NOTE: this method does nothing in Windows

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.sendSignal-method.html }
             *
             * @param Number|String signal The name of the signal to send.
             * @return String
             *
             */
            sendSignal: function(signal) {
            }

            ,
            /**
             * Set an environment variable for this process

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.setEnvironment-method.html }
             *
             * @param String key an environment key
             * @param String value the value
             * @return String
             *
             */
            setEnvironment: function(key, value) {
            }

            ,
            /**
             * Set an onExit event handler for this process

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.setOnExit-method.html }
             *
             * @param Function onExit a function
             * @return String
             *
             */
            setOnExit: function(onExit) {
            }

            ,
            /**
             * Set an onRead event handler for this process stdout and stderr. This handler will take one argument which is the event for this output. To retrieve event data, simply access event.data.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.setOnRead-method.html }
             *
             * @param Function onRead a handler that is passed an event, with a "data" Bytes full of data read from the pipe
             * @return String
             *
             */
            setOnRead: function(onRead) {
            }

            ,
            /**
             * Set the callback to invoke every time a line of input is received from the process. This callback will take one argument, which will be the line of output.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.setOnReadLine-method.html }
             *
             * @param Function fn a callback that is called with every line of output received from this process
             * @return String
             *
             */
            setOnReadLine: function(fn) {
            }

            ,
            /**
             * Terminate this process (SIGTERM in Unix, TerminateProcess in Windows)

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.terminate-method.html }
             *
             * @return String
             *
             */
            terminate: function() {
            }

            ,
            /**
             * Get a string representation of this process.

             * @since 0.5.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.Process.toString-method.html }
             *
             * @return String
             *
             */
            toString: function() {
            }

        }

        ,
        /**
         * Create a Process object. There are two main ways to use this function:
         * Titanium.Process.createProcess({
         *         args: ['mycmd', 'arg1', 'arg2'],
         *         env: {'PATH': '/something'},
         *         stdin: pipeIn,
         *         stdout: pipeOut,
         *          stderr: pipeErr
         *     });
         * Titanium.Process.createProcess(args, environment, stdin, stdout, stderr);

         * @since 0.5.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.createProcess-method.html }
         *
         * @param Array|Object args Either a list of command-line arguments to use for this process invocation
         (including the executable path) or an object describing all parameters of
         this Process object (see above).]
         * @param Object envionment (optional) An object representing the environment to pass to this process.
         * @param Process.Pipe pipeIn (optional) A Process.Pipe object which the new process should use for receiving input.
         * @param Process.Pipe pipeOut (optional) A Process.Pipe object which the new process should use for sending output.
         * @param Process.Pipe pipeErr (optional) A Process.Pipe object which the new process should use for sending error output.
         * @return Process.Process
         *
         */
        createProcess: function(args, envionment, pipeIn, pipeOut, pipeErr) {
        }

        ,
        /**
         * This method is deprecated. See Process.Process.createProcess()

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Process.launch-method.html }
         *
         * @param String command The command to launch
         * @param Array arguments A list of arguments to the command
         * @return String
         *
         */
        launch: function(command, arguments) {
        }

    }

    ,
    /**
     * A module for dealing with encoding and decoding.

     * @since 0.7.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec-module }
     *
     *
     */
    Codec: {
        /**
         * Asynchronously write the contents of a directory to a zip file.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.createZip-method.html }
         *
         * @param Filesystem.File|String root A directory root to write to the zip stream.
         * @param Filesystem.File|String zipFile The path or File object of the destination zip file.
         * @param Function onComplete A function callback that receives the zip file when writing is finished
         * @return String
         *
         */
        createZip: function(root, zipFile, onComplete) {
        }

        ,
        /**
         * Decode a Base64-encoded String.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.decodeBase64-method.html }
         *
         * @param String data String to decode.
         * @return String
         *
         */
        decodeBase64: function(data) {
        }

        ,
        /**
         * Decode a hex binary-encoded String.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.decodeHexBinary-method.html }
         *
         * @param String data String to decode.
         * @return String
         *
         */
        decodeHexBinary: function(data) {
        }

        ,
        /**
         * Digest a String into a hex binary HMAC.
         * String data will first be converted to UTF-8 data.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.digestHMACToHex-method.html }
         *
         * @param int hashType The hash type of the HMAC
         * @param String data The data to encode.
         * @param String data The key to us for the HMAC.
         * @return String
         *
         */
        digestHMACToHex: function(hashType, data, data) {
        }

        ,
        /**
         * Encode some data using a digest algorithm to a hex binary String.
         * String data will first be converted to UTF-8 data.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.digestToHex-method.html }
         *
         * @param int hashType The hash type of the digest
         * @param String|Bytes data The data to encode.
         * @return String
         *
         */
        digestToHex: function(hashType, data) {
        }

        ,
        /**
         * Encode some data into Base64.
         * String data will first be converted to UTF-8 data.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.encodeBase64-method.html }
         *
         * @param String|Bytes data The data to encode.
         * @return String
         *
         */
        encodeBase64: function(data) {
        }

        ,
        /**
         * Encode some data into a hex binary String.
         * String data will first be converted to UTF-8 data.

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.encodeHexBinary-method.html }
         *
         * @param String|Bytes data data to encode
         * @return String
         *
         */
        encodeHexBinary: function(data) {
        }

        ,
        /**
         * Asynchronously extract the contents of a zip file.

         * @since 1.1.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Codec.extractZip-method.html }
         *
         * @param Filesystem.File|String zipFile The path or File object of the zip file being extracted.
         * @param Filesystem.File|String dest A directory into which the files will be extracted.
         * @param Function onComplete A function callback that receives destination directory when completed.
         * @return String
         *
         */
        extractZip: function(zipFile, dest, onComplete) {
        }

    }

    ,
    /**
     * A module for holding currently running application specific functionality.

     * @since 0.2.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App-module.html }
     *
     *
     */
    App: {
        /**
         * Create a new App.Properties object.

         * @since 0.6.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.createProperties-method.html }
         *
         * @param Object properties (optional) Initial properties for the new App.Properties object.
         * @return App.Properties
         *
         */
        createProperties: function(properties) {
        }

        ,
        /**
         * Cause the application to exit after firing the Titanium.EXIT
         * event. The application isn't gauaranteed to exit when this
         * method is called, because an event handler may cancel the
         * EXIT event by calling preventDefault or stopPropagation on it.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.exit-method.html }
         *
         * @return void
         *
         */
        exit: function() {
        }

        ,
        /**
         * Return the command-line arguments passed to this application,
         * excluding the first which is the path to the application executable.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getArguments-method.html }
         *
         * @return Array
         *
         */
        getArguments: function() {
        }

        ,
        /**
         * Return the application's copyright information, defined in the tiapp.xml file.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getCopyright-method.html }
         *
         * @return String
         *
         */
        getCopyright: function() {
        }

        ,
        /**
         * Return the application's description, defined in the tiapp.xml file.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getDescription-method.html }
         *
         * @return String
         *
         */
        getDescription: function() {
        }

        ,
        /**
         * Return the application's GUID, defined in the application manifest.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getGUID-method.html }
         *
         * @return String
         *
         */
        getGUID: function() {
        }

        ,
        /**
         * Return the full path to the application home directory. The application
         * home or contents directory is the subdirectory within the application which
         * contains the application Resources directory and bundled components. On OS X
         * this is the directory "My App.app/Contents" and on Windows and Linux it is
         * simply the path to the application.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getHome-method.html }
         *
         * @return String
         *
         */
        getHome: function() {
        }

        ,
        /**
         * Get this human readable id defined in both the
         * application manifest and the application's tiapp.xml file.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getID-method.html }
         *
         * @return String
         *
         */
        getID: function() {
        }

        ,
        /**
         * Return the full path to the application icon. The application icon path
         * is specified in the application manifest and tiapp.xml relative to the
         * application Resources directory.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getIcon-method.html }
         *
         * @return String
         *
         */
        getIcon: function() {
        }

        ,
        /**
         * Return the application name.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getName-method.html }
         *
         * @return String
         *
         */
        getName: function() {
        }

        ,
        /**
         * Return the full path to the application executable.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getPath-method.html }
         *
         * @return String
         *
         */
        getPath: function() {
        }

        ,
        /**
         * Return the application publisher information specifiedi in the tiapp.xml file.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getPublisher-method.html }
         *
         * @return String
         *
         */
        getPublisher: function() {
        }

        ,
        /**
         * Return the stream URL for the application's updates.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getStreamURL-method.html }
         *
         * @param String ... Any number of String arguments which will be appended as path components of the stream URL.
         * @return String
         *
         */
        getStreamURL: function() {
        }

        ,
        /**
         * Get the system properties defined in tiapp.xml (see App.Properties).

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getSystemProperties-method.html }
         *
         * @return App.Properties
         *
         */
        getSystemProperties: function() {
        }

        ,
        /**
         * Return the application URL definedin the tiapp.xml file.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getURL-method.html }
         *
         * @return String
         *
         */
        getURL: function() {
        }

        ,
        /**
         * Return the application version defined in the tiapp.xml file.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.getVersion-method.html }
         *
         * @return String
         *
         */
        getVersion: function() {
        }

        ,
        /**
         * Loads a properties list from a file path.

         * @since 0.2.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.loadProperties-method.html }
         *
         * @param String path Path to a properties file.
         * @return Array
         *
         */
        loadProperties: function(path) {
        }

        ,
        /**
         * Exit the application and restart it.

         * @since 0.9.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.restart-method.html }
         *
         * @return String
         *
         */
        restart: function() {
        }

        ,
        /**
         * Print a raw string to stderr without a trailing newline.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.stderr-method.html }
         *
         * @param Any data The data to print. If not a String
         * @return String
         *
         */
        stderr: function(data) {
        }

        ,
        /**
         * Reads from stdin

         * @since 0.7.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.stdin-method.html }
         *
         * @param String prompt (optional) Text prompt for input. If not specified, no prompt will appear.
         * @param String delimiter (optional) Will continue reading stdin until the delimiter character is reached. If no argument is specified, this method will continue reading until a newline.
         * @return String
         *
         */
        stdin: function(prompt, delimiter) {
        }

        ,
        /**
         * Print a String to stdout including a trailing newline.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.App.stdout-method.html }
         *
         * @param Any data The data to print. If not a String
         * @return void
         *
         */
        stdout: function(data) {
        }

    }

    ,
    /**
     * A module for dealing with Database storage.

     * @since 0.4.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database-module }
     *
     *
     */
    Database: {
        /**
         * An object representing a set of result from a Database.DB query.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet-object.html }
         *
         *
         */
        ResultSet: {
            /**
             * Return the value of a field in the current row of this Database.ResultSet, given
             * its index in the original SQL query.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.field-method.html }
             *
             * @param Number fieldIndex The zero-based index of the field to query.
             * @return Boolean|String|Number|Bytes
             *
             */
            field: function(fieldIndex) {
            }

            ,
            /**
             * Return the value of the specified field in the current row.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.fieldByName-method.html }
             *
             * @param String name The name of the field to query.
             * @return Boolean|String|Number|Bytes
             *
             */
            fieldByName: function(name) {
            }

            ,
            /**
             * Return the number of fields in this Database.ResultSet.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.fieldCount-method.html }
             *
             * @return Number
             *
             */
            fieldCount: function() {
            }

            ,
            /**
             * Return the name of the specified field in the Database.ResultSet given its index.
             * The index of a field is determined by the original SQL query that generated this
             * Database.ResultSet.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.fieldName-method.html }
             *
             * @param Number fieldIndex The zero-based index of the field to query.
             * @return String
             *
             */
            fieldName: function(fieldIndex) {
            }

            ,
            /**
             * Check whether the current row of this Datbase.ResultSet is valid. Reasons
             * for the current row not being valid include an error in the original SQL
             * statement, a query that returned no results or iterating to the end of
             * the Database.ResultSet.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.isValidRow-method.html }
             *
             * @return Boolean
             *
             */
            isValidRow: function() {
            }

            ,
            /**
             * Move the Database.ResultSet iterator to the next row of this
             * result set. When the iterator has gone past the last entry in
             * the Database.ResultSet, the isValidRow method will return
             * false.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.next-method.html }
             *
             * @return void
             *
             */
            next: function() {
            }

            ,
            /**
             * Return the number of rows in this Database.ResultSet.

             * @since 0.4.0
             * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.ResultSet.rowCount-method.html }
             *
             * @return Number
             *
             */
            rowCount: function() {
            }

        }

        ,
        /**
         * Open a database, given a path to an sqlite file.

         * @since 0.8.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.Database.openFile-method.html }
         *
         * @param String path Path to an SQLite file to store the database in. If the file does not exist
         * @return Database.DB
         *
         */
        openFile: function(path) {
        }

    }

    ,
    /**
     * A module for serializing and deserializing JSON.

     * @since 0.4.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.JSON-module }
     *
     *
     */
    JSON: {
        /**
         * Serialize a JavaScript value into a JSON string.

         * @since 0.4.0
         * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.JSON.stringify-method.html }
         *
         * @param any value The JavaScript value to serialize into a JSON string.
         * @return String
         *
         */
        stringify: function(value) {
        }

    }

    ,
    /**
     * Return the Titanium runtime version.

     * @since 0.8.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.getVersion-method.html }
     *
     * @return String
     *
     */
    getVersion: function() {
    }

    ,
    /**
     * Evaluates a URL or list of URLs in the current JS context, and returns their results (if any)

     * @since 1.1.0
     * {@link http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.include-method.html }
     *
     * @param String|Bytes|Filesystem.File|Array files A list of urls or files to include
     * @return object | Array
     *
     */
    include: function(files) {
    }

}
