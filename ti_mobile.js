/**
 * The top level Titanium module.

 * @since 0.1
 * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium-module }
 *
 *
 */
var Titanium = {
    /**
     * The blob is an abstract data type that represents binary information, often obtained through HTTPClient or via files. It often is used to store text or the actual data of an image.

     * @since 0.9
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Blob-object.html }
     *
     *
     */
    Blob: {
        /**
         * Generate a thumbnail version of an image, optionally with a border and rounded corners (currently iPhone/iPad only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Blob.imageAsThumbnail-method.html }
         *
         * @param int size the size of the thumbnail, in either width or height
         * @param int borderSize the optional width of the thumbnail's border. The default is 1.
         * @param int cornerRadius the radius of the thumbnail's corners. The default is 0.
         * @return object
         *
         */
        imageAsThumbnail: function(size, borderSize, cornerRadius) {
        }

    }

    ,
    /**
     * Wrapper around Titanium.Blob that implements the Titanium.IOStream interface

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream-object.html }
     *
     *
     */
    BlobStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * Buffer is a container for raw data. A buffer is created by the method Titanium.createBuffer.

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer-object.html }
     *
     *
     */
    Buffer: {
        /**
         * appends sourceBuffer to the current buffer.  Buffer is grown dynamically to accommodate the additional data if need be.  returns the number of bytes appended. Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.append-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to append to current buffer
         * @param Number sourceOffset (Optional) offset to start reading buffer data from
         * @param Number sourceLength (Optional) length of data to read from buffer
         * @return Number
         *
         */
        append: function(sourceBuffer, sourceOffset, sourceLength) {
        }

        ,
        /**
         * Clears buffer contents but does not change the size of the buffer

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.clear-method.html }
         *
         * @return void
         *
         */
        clear: function() {
        }

        ,
        /**
         * create new copy of the current buffer.  Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.clone-method.html }
         *
         * @param Number offset (Optional) offset of buffer to start clone
         * @param Number length (Optional) length of buffer data starting at offset to clone
         * @return Titanium.Buffer
         *
         */
        clone: function(offset, length) {
        }

        ,
        /**
         * copies the contents of sourceBuffer into the current buffer at offset.  will not expand buffer if there is not enough room in the current buffer to accomodate all the requested data from sourceBuffer.  returns the number of bytes copied.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.copy-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to copy into current buffer
         * @param Number offset offset to copy new buffer at
         * @param Number sourceOffset (Optional) offset of sourceBuffer to copy data from
         * @param Number sourceLength (Optional) length of data from sourceBuffer to copy
         * @return Number
         *
         */
        copy: function(sourceBuffer, offset, sourceOffset, sourceLength) {
        }

        ,
        /**
         * fills buffer with fillByte.  Optional offset and length arguments to specify that filling should occur starting at particular offset and finish when length bytes have been written or the end of the buffer is reached.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.fill-method.html }
         *
         * @param Number fillByte byte to fill buffer with
         * @param Number offset (Optional) offset of where to start fill
         * @param Number length (Optional) number of bytes to fill
         * @return void
         *
         */
        fill: function(fillByte, offset, length) {
        }

        ,
        /**
         * inserts sourceBuffer into the current buffer at offset.  Buffer is grown to accommodate the new data.  returns the number of bytes inserted.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.insert-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to insert into current buffer
         * @param Number offset offset to insert new buffer at
         * @param Number sourceOffset (Optional) offset of sourceBuffer to insert data from
         * @param Number sourceLength (Optional) length of data from sourceBuffer to insert
         * @return Number
         *
         */
        insert: function(sourceBuffer, offset, sourceOffset, sourceLength) {
        }

        ,
        /**
         * Releases the space allocated to the buffer, sets length to 0.  This is effectively the same as buffer.length = 0

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.release-method.html }
         *
         * @return void
         *
         */
        release: function() {
        }

        ,
        /**
         * Converts this buffer to a Titanium.Blob

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.toBlob-method.html }
         *
         * @return Titanium.Blob
         *
         */
        toBlob: function() {
        }

        ,
        /**
         * Converts this buffer to a String

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.toString-method.html }
         *
         * @return String
         *
         */
        toString: function() {
        }

    }

    ,
    /**
     * Wrapper around Titanium.Buffer that implements the Titanium.IOStream interface

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream-object.html }
     *
     *
     */
    BufferStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * IOStream is the interface that all stream types implement

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream-object.html }
     *
     *
     */
    IOStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * Wrapper around Titanium.Blob that implements the Titanium.IOStream interface

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream-object.html }
     *
     *
     */
    BlobStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BlobStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * Stream module containing stream utility methods

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream-module }
     *
     *
     */
    Stream: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * Creates stream from specified container.  Returns Titanium.BufferStream or Titanium.BlobStream depending on whether a Buffer or Blob is provided as the 'source' property in params.  Write and append mode only applies to Buffer as Blob is read only.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.createStream-method.html }
         *
         * @param Object params creation arguments, which are: source, a Titanium.Buffer or Titanium.Blob on which to base the stream.  mode,  mode for the stream to be opened in, which can be Titanium.Stream.MODE_READ,  Titanium.Stream.MODE_WRITE or Titanium.Stream.MODE_APPEND.
         * @return Titanium.IOStream
         *
         */
        createStream: function(params) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * Pumps data from input stream to handler method

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.pump-method.html }
         *
         * @param Titanium.IOStream inputStream Stream to pump from
         * @param Function handler handler method that will receive the pumped data.  The function takes a single parameter, which in turn contains the following members: source, the stream being read from.  buffer, the Titanium.Buffer holding the data currently being pumped to the handler method (i.e., the current chunk).  bytesProcessed, the number of bytes in the current pump segment.  totalBytesProcessed, total number of bytes processed in the overall pump operation so far.  errorState, an error state if any.  errorDescription, an error description if any.
         * @param Number maxChunkSize max size of data to pump from inputStream to the handler method at once
         * @param Boolean isAsync true is pump operation should be async, false is not.  (Optional, default is false).
         * @return void
         *
         */
        pump: function(inputStream, handler, maxChunkSize, isAsync) {
        }

        ,
        /**
         * Async version of read on Titanium.IOStream

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.read-method.html }
         *
         * @param Titanium.IOStream sourceStream Stream to read from
         * @param Titanium.Buffer buffer Buffer to read into
         * @param Number offset (optional) offset to start reading buffer data from.  Default = 0.
         * @param Number length (optional) length of data to read from buffer.  Default is buffer length.
         * @param Function resultsCallback called with result of the read operation.  Callback parameter has these members: source, the stream being read.  bytesProcessed, the number of bytes read.  errorState, an error state if any.  errorDescription, an error description if any.
         * @return void
         *
         */
        read: function(sourceStream, buffer, offset, length, resultsCallback) {
        }

        ,
        /**
         * reads all data from Titanium.IOStream.  If you pass a buffer and callback, the read will be asynchronous and readAll won't return anything.  If you don't pass a buffer and callback, the read will be synchronous and a Titanium.Buffer with the read data will be returned.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.readAll-method.html }
         *
         * @param Titanium.IOStream sourceStream Stream to read from
         * @param Titanium.Buffer buffer Buffer to read into.  OPTIONAL: use only if you want an asynchronous read.
         * @param Function resultsCallback called with result of the read operation.  OPTIONAL: use only if you want an asynchronous read.  Callback parameter has these members: source, the stream being read.  bytesProcessed, the number of bytes read.  errorState, an error state if any.  errorDescription, an error description if any.
         * @return void
         *
         */
        readAll: function(sourceStream, buffer, resultsCallback) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * Async version of write on Titanium.IOStream that takes offset and length

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.write-method.html }
         *
         * @param Titanium.IOStream outputStream Stream to write to
         * @param Titanium.Buffer buffer Buffer to write from
         * @param Number offset offset to start writing buffer data from. (Optional, default is 0).
         * @param Number length length of data to write from buffer.  (Optional, default is buffer.length).
         * @param Function resultsCallback called with result of the write operation. Callback parameter has these members: source, the stream being written to.  bytesProcessed, the number of bytes written.  errorState, an error state if any.  errorDescription, an error description if any.
         * @return void
         *
         */
        write: function(outputStream, buffer, offset, length, resultsCallback) {
        }

        ,
        /**
         * Writes all data from input stream to output stream.  Pass a callback function as the final argument if you wish for the write operation to be asynchronous.  The synchronous version will return a number indicating the number of bytes written.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Stream.writeStream-method.html }
         *
         * @param Titanium.IOStream inputStream Stream to read from
         * @param Titanium.IOStream outputStream Stream to write to
         * @param Number maxChunkSize max size of data to write from inputStream to ouputStream at once
         * @param Function resultsCallback called with result of the writeStream operation.  (OPTIONAL: use only if you want the write operation to be asynchronous).  The callback parameter has these members: fromStream, the stream being read from.  toStream, the stream being written to.  bytesProcessed, the number of bytes read and written.  errorState, an error state if any.  errorDescription, an error description if any.
         * @return void
         *
         */
        writeStream: function(inputStream, outputStream, maxChunkSize, resultsCallback) {
        }

    }

    ,
    /**
     * The top level Contacts module.  The Contacts module is used accessing the device Address Book.  (Read-only on Android.)

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts-module }
     *
     *
     */
    Contacts: {
        /**
         * An object which represents a group in the contacts database.

         * @since 1.4.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Group-object.html }
         *
         *
         */
        Group: {
            /**
             * Adds a person to the group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Group.add-method.html }
             *
             * @param object person Titanium.Contacts.Person object to remove from the group
             * @return void
             *
             */
            add: function(person) {
            }

            ,
            /**
             * The complete list of members of the group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Group.members-method.html }
             *
             * @return void
             *
             */
            members: function() {
            }

            ,
            /**
             * Removes a person from the group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Group.remove-method.html }
             *
             * @param object person Titanium.Contacts.Person object to remove from the group
             * @return void
             *
             */
            remove: function(person) {
            }

            ,
            /**
             * A list of sorted members

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Group.sortedMembers-method.html }
             *
             * @param int sortBy Method for sorting.  Must be one of  Titanium.Contacts.CONTACTS_SORT_FIRST_NAME or Titanium.Contacts.CONTACTS_SORT_LAST_NAME
             * @return void
             *
             */
            sortedMembers: function(sortBy) {
            }

        }

        ,
        /**
         * An object which represents a person in the contacts database.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.Person-object.html }
         *
         *
         */
        Person: {
        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * create and return an instance of Titanium.Contacts.Group

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.createGroup-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Contacts.Group
         * @return object
         *
         */
        createGroup: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Contacts.Person

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.createPerson-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Contacts.Person
         * @return object
         *
         */
        createPerson: function(parameters) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * Returns an of all Titanium.Contacts.Group objects in the contacts database

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.getAllGroups-method.html }
         *
         * @return void
         *
         */
        getAllGroups: function() {
        }

        ,
        /**
         * Returns an array of all Titanium.Contacts.Person objects in the contacts database

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.getAllPeople-method.html }
         *
         * @return void
         *
         */
        getAllPeople: function() {
        }

        ,
        /**
         * Returns a Titanium.Contacts.Group object with the given ID

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.getGroupByID-method.html }
         *
         * @param int id The database ID of the group to retrieve
         * @return object
         *
         */
        getGroupByID: function(id) {
        }

        ,
        /**
         * Returns an array of Titanium.Contacts.Person objects who have a name (first, last, middle, composite) which matches the given name

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.getPeopleWithName-method.html }
         *
         * @param string name The name to match in the database
         * @return array
         *
         */
        getPeopleWithName: function(name) {
        }

        ,
        /**
         * Returns a Titanium.Contacts.Person object with the given ID

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.getPersonByID-method.html }
         *
         * @param int id The database ID of the person to retrieve
         * @return object
         *
         */
        getPersonByID: function(id) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * Removes a group from the contacts database (NOTE: not supported on Android.)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.removeGroup-method.html }
         *
         * @param object group The Titanium.Contacts.Group object to remove from the database. (NOTE: not supported on Android.)
         * @return void
         *
         */
        removeGroup: function(group) {
        }

        ,
        /**
         * Removes a person from the contacts database. (NOTE: not supported on Android.)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.removePerson-method.html }
         *
         * @param object person The Titanium.Contacts.Person object to remove from the database. (NOTE: not supported on Android.)
         * @return void
         *
         */
        removePerson: function(person) {
        }

        ,
        /**
         * Reverts all changes made to the previous save of the database (NOTE: not supported on Android.)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.revert-method.html }
         *
         * @return void
         *
         */
        revert: function() {
        }

        ,
        /**
         * Saves all changes to contacts to the database (NOTE: not supported on Android.)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.save-method.html }
         *
         * @return void
         *
         */
        save: function() {
        }

        ,
        /**
         * Displays the contact picker

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Contacts.showContacts-method.html }
         *
         * @param function cancel The function to call when selection is cancelled
         * @param function selectedPerson The function to call when a person is selected.  Mutually exclusive with selectedProperty
         * @param function selectedProperty The function to call when a property is selected.  Mutally exclusive with selectedPerson
         * @param boolean animated Whether or not to animate the show/hide of the contacts picker
         * @param array fields A list of field names to show when selecting properties, default is to show all available
         * @return void
         *
         */
        showContacts: function(cancel, selectedPerson, selectedProperty, animated, fields) {
        }

    }

    ,
    /**
     * The top level Geolocation module. The Geolocation module is used for accessing device location based information.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation-module.html }
     *
     *
     */
    Geolocation: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * tries to resolve an address to a location.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.forwardGeocoder-method.html }
         *
         * @param string address address to resolve.
         * @param function callback function to invoke on success or failure. The event object contains the properties described as the place dictionary in Titanium.Geolocation.reverseGeocoder.
         * @return void
         *
         */
        forwardGeocoder: function(address, callback) {
        }

        ,
        /**
         * retrieve the current compass heading.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.getCurrentHeading-method.html }
         *
         * @param function callback function to invoke on success or failure of obtaining the current heading. See heading event in Titanium.Geolocation.
         * @return void
         *
         */
        getCurrentHeading: function(callback) {
        }

        ,
        /**
         * retrieve the last known location from the device. On Android, the radios are not turned on to update the location. On iOS the radios MAY be used if the location is too "old".

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.getCurrentPosition-method.html }
         *
         * @param function callback function to invoke on success or failure of obtaining the current location. See location event in Titanium.Geolocation.
         * @return void
         *
         */
        getCurrentPosition: function(callback) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * tries to resolve a location to an address.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.reverseGeocoder-method.html }
         *
         * @param double latitude latitude to search
         * @param double longitude longitude to search
         * @param function callback function to invoke on success or failure. The event object passed contains a places array of zero or more place dictionaries. Each place dictionary contains the following properties: street, street1, city, region1, region2, postalCode, country, countryCode, longitude, latitude, displayAddress, address.
         * @return void
         *
         */
        reverseGeocoder: function(latitude, longitude, callback) {
        }

        ,
        /**
         * configure the calibration UI. set the false to disable the calibration display. (iOS only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation.setShowCalibration-method.html }
         *
         * @return void
         *
         */
        setShowCalibration: function() {
        }

    }

    ,
    /**
     * The top level Gestures module.  The Gesture module is responsible for high level device gestures that are device-wide.

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Gesture-module }
     *
     *
     */
    Gesture: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Gesture.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Gesture.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Gesture.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The blob is an abstract data type that represents binary information, often obtained through HTTPClient or via files. It often is used to store text or the actual data of an image.

     * @since 0.9
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Blob-object.html }
     *
     *
     */
    Blob: {
        /**
         * Generate a thumbnail version of an image, optionally with a border and rounded corners (currently iPhone/iPad only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Blob.imageAsThumbnail-method.html }
         *
         * @param int size the size of the thumbnail, in either width or height
         * @param int borderSize the optional width of the thumbnail's border. The default is 1.
         * @param int cornerRadius the radius of the thumbnail's corners. The default is 0.
         * @return object
         *
         */
        imageAsThumbnail: function(size, borderSize, cornerRadius) {
        }

    }

    ,
    /**
     * IOStream is the interface that all stream types implement

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream-object.html }
     *
     *
     */
    IOStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.IOStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * The top level App module.  The App module is mainly used for accessing information about the application at runtime.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App-module }
     *
     *
     */
    App: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.fireEvent-method.html }
         *
         * @param string name the event name
         * @param object data optional data payload for the event. NOTE: you can only pass JSON serializable data since the data must be transportable between contexts.
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, data, name, event) {
        }

        ,
        /**
         * return the arguments passed to the application on startup as a dictionary

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.getArguments-method.html }
         *
         * @return object
         *
         */
        getArguments: function() {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The main Titanium.UI module.  The UI module is responsible for native user-interface components and interaction inside Titanium.  The goal of the UI module is to provide a native experience along with native performance by compiling Javascript code into their native counterparts as part of the build process.

     * @since 0.4
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI }
     *
     *
     */
    UI: {
        /**
         * The 2DMatrix is created by Titanium.UI.create2DMatrix.  The 2D Matrix is an object for holding values for an affine transformation matrix. A 2D matrix is used to rotate, scale, translate, or skew the objects in a two-dimensional space. A 2D matrix is represented by a 3 by 3 matrix. Because the third column is always (0,0,1), the data structure contains values for only the first two columns.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix-object.html }
         *
         *
         */
        twoDMatrix: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * Returns a matrix constructed by inverting an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.invert-method.html }
             *
             * @return void
             *
             */
            invert: function() {
            }

            ,
            /**
             * Returns a matrix constructed by combining two existing matrix.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.multiply-method.html }
             *
             * @param object t2 The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.
             * @return object
             *
             */
            multiply: function(t2) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * Returns a matrix constructed by rotating an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.rotate-method.html }
             *
             * @param float angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
             * @return object
             *
             */
            rotate: function(angle) {
            }

            ,
            /**
             * Returns a matrix constructed by scaling an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.scale-method.html }
             *
             * @param float sx The value by which to scale x values of the matrix
             * @param float sy The value by which to scale y values of the matrix
             * @return object
             *
             */
            scale: function(sx, sy) {
            }

            ,
            /**
             * Returns a matrix constructed by translating an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.2DMatrix.translate-method.html }
             *
             * @param float tx The value by which to move x values with the matrix
             * @param float ty The value by which to move y values with the matrix
             * @return object
             *
             */
            translate: function(tx, ty) {
            }

        }

        ,
        /**
         * The 3DMatrix is created by Titanium.UI.create3DMatrix.  The 3D Matrix is an object for holding values for an affine transformation matrix. A 3D matrix is used to rotate, scale, translate, or skew the objects in a three-dimensional space. A 3D matrix is represented by a 4 by 4 matrix. Because the forth column is always (0,0,1), the data structure contains values for only the first three columns.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix-object.html }
         *
         *
         */
        threeDMatrix: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * Returns a matrix constructed by inverting an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.invert-method.html }
             *
             * @return void
             *
             */
            invert: function() {
            }

            ,
            /**
             * Returns a matrix constructed by combining two existing matrix.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.multiply-method.html }
             *
             * @param object t2 The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.
             * @return object
             *
             */
            multiply: function(t2) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * Returns a matrix constructed by rotating an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.rotate-method.html }
             *
             * @param float angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
             * @param float x The x part of the vector about which to rotate
             * @param float y The y part of the vector about which to rotate
             * @param float z The z part of the vector about which to rotate
             * @return object
             *
             */
            rotate: function(angle, x, y, z) {
            }

            ,
            /**
             * Returns a matrix constructed by scaling an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.scale-method.html }
             *
             * @param float sx The value by which to scale x values of the matrix
             * @param float sy The value by which to scale y values of the matrix
             * @param float sz The value by which to scale z values of the matrix
             * @return object
             *
             */
            scale: function(sx, sy, sz) {
            }

            ,
            /**
             * Returns a matrix constructed by translating an existing matrix

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.3DMatrix.translate-method.html }
             *
             * @param float tx The value by which to move x values with the matrix
             * @param float ty The value by which to move y values with the matrix
             * @param float tz The value by which to move z values with the matrix
             * @return object
             *
             */
            translate: function(tx, ty, tz) {
            }

        }

        ,
        /**
         * An Activity Indicator is created by the method Titanium.UI.createActivityIndicator.  An activity indicator can be used to show the progress of an operation in the UI to let the user know some action is taking place.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ActivityIndicator-object.html }
         *
         *
         */
        ActivityIndicator: {
            /**
             * call hide to make the activity indicator hidden and stop spinning

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ActivityIndicator.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * call show to make the activity indicator visible and start spinning

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ActivityIndicator.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

        }

        ,
        /**
         * The Alert Dialog is created by Titanium.UI.createAlertDialog and allows you to show a modal application dialog.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog-object.html }
         *
         *
         */
        AlertDialog: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * cause the dialog to become hidden

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * cause the dialog to become visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.AlertDialog.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

        }

        ,
        /**
         * The Animation object is used for specifying lower-level animation properties and more low-level control of events during an animation. The Animation is created by the method Titanium.UI.createAnimation.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Animation-object.html }
         *
         *
         */
        Animation: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Animation.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Animation.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Animation.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

        }

        ,
        /**
         * A Button is created by the method Titanium.UI.createButton.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button-object.html }
         *
         *
         */
        Button: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Button Bar is created by the method Titanium.UI.createButtonBar.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar-object.html }
         *
         *
         */
        ButtonBar: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Cover Flow view is container for showing  animated, three dimensional images in a nice UI. The Cover Flow view is created by the method Titanium.UI.createCoverFlowView.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView-object.html }
         *
         *
         */
        CoverFlowView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * change an image for a index

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.setImage-method.html }
             *
             * @param int index index to change
             * @param object image the image to set the index to. May be a TiBlob, TiFile, URL, or dictionary with 'image' (may be any of TiBlob, TiFile, URL), 'width', 'height' keys.  'auto' is not allowed, only exact sizes (although a size may be omitted to keep the image at that size).  If passed as a TiFile or URL, will perform a check for '@2x' on Retina displays
             * @return void
             *
             */
            setImage: function(index, image) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * An item that represents a visual icon in the Titanium.UI.DashboardView. The Dashboard Item is created by the method Titanium.UI.createDashboardItem.

         * @since 1.2
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardItem-object.html }
         *
         *
         */
        DashboardItem: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardItem.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardItem.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardItem.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

        }

        ,
        /**
         * The Dashboard View provides a view that supports the ability to have Springboard-like view of icons which can be reordered by dragging and can contain multiple pages of icons in a scrollable view. The Dashboard View is created by the method Titanium.UI.createDashboardView.

         * @since 1.2
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView-object.html }
         *
         *
         */
        DashboardView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * put the dashboard in edit mode

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.startEditing-method.html }
             *
             * @return void
             *
             */
            startEditing: function() {
            }

            ,
            /**
             * cancel editing

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.stopEditing-method.html }
             *
             * @return void
             *
             */
            stopEditing: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Email Dialog is created by Titanium.UI.createEmailDialog and allows you to send in application emails on behalf of the application user.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog-object.html }
         *
         *
         */
        EmailDialog: {
            /**
             * add an attachment to the email. the attachment can either be a Blob or File object. (Note: Android will only accept one attachment at this time.)

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.addAttachment-method.html }
             *
             * @param object attachment attachment object as either a Blob or File object
             * @return void
             *
             */
            addAttachment: function(attachment) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * return whether or not sending email is supported

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.isSupported-method.html }
             *
             * @return void
             *
             */
            isSupported: function() {
            }

            ,
            /**
             * open the email dialog. the email dialog itself is a modal window

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.open-method.html }
             *
             * @param object properties object of animation properties. pass animated property (as boolean) to indicate if the dialog should be animated on open.
             * @return void
             *
             */
            open: function(properties) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.EmailDialog.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

        }

        ,
        /**
         * An Image View is used to display an image or a series of images in an animation. The Image View is created by the method Titanium.UI.createImageView.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView-object.html }
         *
         *
         */
        ImageView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * pause a started animation.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * start the image animation. this method only works if you set multiple images

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.start-method.html }
             *
             * @return void
             *
             */
            start: function() {
            }

            ,
            /**
             * stop a started animation and reset the index to the first image

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

            ,
            /**
             * return the image as a Blob object

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.toBlob-method.html }
             *
             * @return void
             *
             */
            toBlob: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ImageView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Label is created by the method Titanium.UI.createLabel.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label-object.html }
         *
         *
         */
        Label: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Option Dialog is created by Titanium.UI.createOptionDialog and allows you to show a modal dialog of one or more options to the user.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.OptionDialog-object.html }
         *
         *
         */
        OptionDialog: {
            /**
             * cause the dialog to become visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.OptionDialog.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

        }

        ,
        /**
         * A Picker is created by the method Titanium.UI.createPicker.  A Picker can be used to select one or more fixed values.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker-object.html }
         *
         *
         */
        Picker: {
            /**
             * add an array of rows, a single row or a column to the picker

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.add-method.html }
             *
             * @param array,object data add an array of rows, a single row or a column to the picker
             * @return void
             *
             */
            add: function(data) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * get the selected row object for column

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.getSelectedRow-method.html }
             *
             * @param int index for the column index, return the row object or nil if not found
             * @return object
             *
             */
            getSelectedRow: function(index) {
            }

            ,
            /**
             * causes the picker to reload the values from the new column.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.reloadColumn-method.html }
             *
             * @param object column new column to load
             * @return void
             *
             */
            reloadColumn: function(column) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * set the column's row to the selected state

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker.setSelectedRow-method.html }
             *
             * @param int column the column index
             * @param int row the row index
             * @param boolean animated boolean to indicate if the selection should be animated (default) (optional)
             * @return void
             *
             */
            setSelectedRow: function(column, row, animated) {
            }

        }

        ,
        /**
         * The picker row object created by Titanium.UI.createPickerColumn.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn-object.html }
         *
         *
         */
        PickerColumn: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * add a row to the column.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.addRow-method.html }
             *
             * @param Titanium.UI.PickerRow row The row to add.
             * @return void
             *
             */
            addRow: function(row) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * remove a row from the column.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.removeRow-method.html }
             *
             * @param Titanium.UI.PickerRow row The row to remove.
             * @return void
             *
             */
            removeRow: function(row) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The picker row object created by Titanium.UI.createPickerRow.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow-object.html }
         *
         *
         */
        PickerRow: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Progress Bar is created by the method Titanium.UI.createProgressBar.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ProgressBar-object.html }
         *
         *
         */
        ProgressBar: {
        }

        ,
        /**
         * A Scroll View is used to create a scrollable region of content.  Views added to the Scroll View will be scrolled based on the content size of the Scroll View. The Scroll View is created by the method Titanium.UI.createScrollView. Note: In Android, Scroll Views can only scroll in one direction, either vertical or horizontal, but not both at the same time. See the Titanium.UI.ScrollView.scrollType property

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView-object.html }
         *
         *
         */
        ScrollView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * scrollTo a particular point

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.scrollTo-method.html }
             *
             * @param float x the x point within the view
             * @param float y the y point within the view
             * @return void
             *
             */
            scrollTo: function(x, y) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Scrollable View provides a view that supports horizontal scrolling on one or more views in a gesture motion.  The Scrollable View also optionally supports a visual paging control to indicate the page that the view is visible. The Scrollable View is created by the method Titanium.UI.createScrollableView.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object.html }
         *
         *
         */
        ScrollableView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * add a new view to the Scrollable View

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.addView-method.html }
             *
             * @param object view the view to add
             * @return void
             *
             */
            addView: function(view) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * remove an existing view from the Scrollable View

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.removeView-method.html }
             *
             * @param object view the view to remove
             * @return void
             *
             */
            removeView: function(view) {
            }

            ,
            /**
             * scroll to a specific view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.scrollToView-method.html }
             *
             * @param int,object view either an integer index or the view object to bring into view as the currentPage
             * @return void
             *
             */
            scrollToView: function(view) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Search Bar is created by the method Titanium.UI.createSearchBar.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar-object.html }
         *
         *
         */
        SearchBar: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * called to force the search bar to lose focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.blur-method.html }
             *
             * @return void
             *
             */
            blur: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * called to force the search bar to focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.focus-method.html }
             *
             * @return void
             *
             */
            focus: function() {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Slider is created by the method Titanium.UI.createSlider.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider-object.html }
         *
         *
         */
        Slider: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Switch is created by the method Titanium.UI.createSwitch.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch-object.html }
         *
         *
         */
        Switch: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A TabGroup Tab instance.  Each Tab instance maintains a stack of tab windows. Only one window within in the Tab can be visible at a time.  When a window is closed, either by the user or by code, the window is removed from the stack, make the previous window visible. The root tab window cannot be removed. The Tab Group is created by the method Titanium.UI.createTab.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab-object.html }
         *
         *
         */
        Tab: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Tab Group allows you to manage a tabbed UI of one or more windows. The Tab Group is created by the method Titanium.UI.createTabGroup.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup-object.html }
         *
         *
         */
        TabGroup: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * add a tab to the tab group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.addTab-method.html }
             *
             * @return void
             *
             */
            addTab: function() {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * close the tab group and remove it from the UI

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * open the tab group and make it visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.open-method.html }
             *
             * @return void
             *
             */
            open: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * remove a tab from the tab group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.removeTab-method.html }
             *
             * @return void
             *
             */
            removeTab: function() {
            }

            ,
            /**
             * select the currently active tab in a tab group

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.setActiveTab-method.html }
             *
             * @param object indexOrObject an int representing the desired tab index or a reference to the tab object you'd like to switch to
             * @return void
             *
             */
            setActiveTab: function(indexOrObject) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Tabbed Bar is created by the method Titanium.UI.createTabbedBar. The difference between the Tabbed Bar and the Button Bar is that the tabbed bar visually maintains a state (visually distinguished as a pressed or selected look).

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar-object.html }
         *
         *
         */
        TabbedBar: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Table View allows you to create a scrollable table of content in a list-based fashion. The Table View is created by the method Titanium.UI.createTableView.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object.html }
         *
         *
         */
        TableView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * append a row to the table, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.appendRow-method.html }
             *
             * @param object row row to append
             * @param object properties animation properties
             * @return void
             *
             */
            appendRow: function(row, properties) {
            }

            ,
            /**
             * delete an existing row, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.deleteRow-method.html }
             *
             * @param int row index of row to delete
             * @param object properties animation properties
             * @return void
             *
             */
            deleteRow: function(row, properties) {
            }

            ,
            /**
             * programmatically deselect a row

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.deselectRow-method.html }
             *
             * @param int row row index to deselect
             * @return void
             *
             */
            deselectRow: function(row) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * insert a row before another row, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.insertRowAfter-method.html }
             *
             * @param int index index
             * @param object row row to insert
             * @param object properties animation properties
             * @return void
             *
             */
            insertRowAfter: function(index, row, properties) {
            }

            ,
            /**
             * insert a row after another row, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.insertRowBefore-method.html }
             *
             * @param int index index
             * @param object row row to insert
             * @param object properties animation properties
             * @return void
             *
             */
            insertRowBefore: function(index, row, properties) {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * scroll to a specific row index and ensure that that row is on screen

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.scrollToIndex-method.html }
             *
             * @param int index index
             * @param object properties animation properties. position property controls the position constant to use for position (on iPhone, use constants from Titanium.UI.iPhone.TableViewScrollPosition).
             * @return void
             *
             */
            scrollToIndex: function(index, properties) {
            }

            ,
            /**
             * scroll the table to a specific top position where 0 is the topmost y position in the table view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.scrollToTop-method.html }
             *
             * @param float top y position
             * @param object properties optional dictionary with the key animated (default, true) as boolean to indicate if the scroll should be animated or immediate
             * @return void
             *
             */
            scrollToTop: function(top, properties) {
            }

            ,
            /**
             * programmatically select a row

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.selectRow-method.html }
             *
             * @param int row row index to select
             * @return void
             *
             */
            selectRow: function(row) {
            }

            ,
            /**
             * set the data in the table, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.setData-method.html }
             *
             * @param array data data array of rows either as objects or row objects
             * @param object properties animation properties
             * @return void
             *
             */
            setData: function(data, properties) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

            ,
            /**
             * update an existing row, optionally with animation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView.updateRow-method.html }
             *
             * @param object row row data to update
             * @param object properties animation properties
             * @return void
             *
             */
            updateRow: function(row, properties) {
            }

        }

        ,
        /**
         * A TableView row object created by the method Titanium.UI.createTableViewRow.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow-object.html }
         *
         *
         */
        TableViewRow: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A TableView section object created by the method Titanium.UI.createTableViewSection.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection-object.html }
         *
         *
         */
        TableViewSection: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.add-method.html }
             *
             * @param object row the row object to add to the section
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(row, view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.remove-method.html }
             *
             * @param object row the row object to remove from the section
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(row, view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Text Area is created by the method Titanium.UI.createTextArea. The Text Area is a multiline field.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea-object.html }
         *
         *
         */
        TextArea: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * force the field to lose focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.blur-method.html }
             *
             * @return void
             *
             */
            blur: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * force the field to gain focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.focus-method.html }
             *
             * @return void
             *
             */
            focus: function() {
            }

            ,
            /**
             * return boolean (true) if the field has text

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.hasText-method.html }
             *
             * @return void
             *
             */
            hasText: function() {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Text Area is created by the method Titanium.UI.createTextField. The Text Field is a single line field.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField-object.html }
         *
         *
         */
        TextField: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * force the field to lose focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.blur-method.html }
             *
             * @return void
             *
             */
            blur: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * force the field to gain focus

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.focus-method.html }
             *
             * @return void
             *
             */
            focus: function() {
            }

            ,
            /**
             * return boolean (true) if the field has text

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.hasText-method.html }
             *
             * @return void
             *
             */
            hasText: function() {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * A Toolbar is created by the method Titanium.UI.createToolbar.  A Toolbar can be placed at the bottom of a window and contain buttons.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar-object.html }
         *
         *
         */
        Toolbar: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The View is an empty drawing surface or container. The View is created by the method Titanium.UI.createView.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View-object.html }
         *
         *
         */
        View: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Web View allows you to open an HTML5 based view which can load either local or remote content. The content can be any valid web content such as HTML, PDF, SVG or other WebKit supported content types. The Web View is created by the method Titanium.UI.createWebView.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView-object.html }
         *
         *
         */
        WebView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * returns true if the webview can go back in history

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.canGoBack-method.html }
             *
             * @return boolean
             *
             */
            canGoBack: function() {
            }

            ,
            /**
             * returns true if the webview can go forward in history

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.canGoForward-method.html }
             *
             * @return boolean
             *
             */
            canGoForward: function() {
            }

            ,
            /**
             * invoke JavaScript inside the context of the webview and optionally, return a result

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.evalJS-method.html }
             *
             * @param string content JavaScript code as a string. The code will be evaluated inside the webview context.
             * @return string
             *
             */
            evalJS: function(content) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * go back one entry in history to the previous page

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.goBack-method.html }
             *
             * @return void
             *
             */
            goBack: function() {
            }

            ,
            /**
             * go forward one entry in history to the page before the current page

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.goForward-method.html }
             *
             * @return void
             *
             */
            goForward: function() {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * reload the current webpage

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.reload-method.html }
             *
             * @return void
             *
             */
            reload: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * force the webview to repaint its contents

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.repaint-method.html }
             *
             * @return void
             *
             */
            repaint: function() {
            }

            ,
            /**
             * set the basic authentication for the webview instance to be used on subsequent url requests

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.setBasicAuthentication-method.html }
             *
             * @param string username the username
             * @param string password the password
             * @return void
             *
             */
            setBasicAuthentication: function(username, password) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * stop loading a currently loading page

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.stopLoading-method.html }
             *
             * @return void
             *
             */
            stopLoading: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * The Window is an empty drawing surface or container. The Window is created by the method Titanium.UI.createWindow. Unlike Views, Windows can be opened and closed and can have special display properties such as fullscreen or modal.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object.html }
         *
         *
         */
        Window: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * close the window

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.close-method.html }
             *
             * @param object options close the window with optional animation or display properties
             * @return void
             *
             */
            close: function(options) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * open the window

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.open-method.html }
             *
             * @param object options open the window with optional animation or display properties
             * @return void
             *
             */
            open: function(options) {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.2DMatrix

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.create2DMatrix-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.2DMatrix
         * @return object
         *
         */
        create2DMatrix: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.3DMatrix

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.create3DMatrix-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.3DMatrix
         * @return object
         *
         */
        create3DMatrix: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ActivityIndicator

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createActivityIndicator-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ActivityIndicator
         * @return object
         *
         */
        createActivityIndicator: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.AlertDialog

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createAlertDialog-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.AlertDialog
         * @return object
         *
         */
        createAlertDialog: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Animation

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createAnimation-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Animation
         * @return object
         *
         */
        createAnimation: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Button

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createButton-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Button
         * @return object
         *
         */
        createButton: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ButtonBar

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createButtonBar-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ButtonBar
         * @return object
         *
         */
        createButtonBar: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.CoverFlowView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createCoverFlowView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.CoverFlowView
         * @return object
         *
         */
        createCoverFlowView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.DashboardItem

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createDashboardItem-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.DashboardItem
         * @return object
         *
         */
        createDashboardItem: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.DashboardView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createDashboardView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.DashboardView
         * @return object
         *
         */
        createDashboardView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.EmailDialog

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createEmailDialog-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.EmailDialog
         * @return object
         *
         */
        createEmailDialog: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ImageView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createImageView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ImageView
         * @return object
         *
         */
        createImageView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Label

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createLabel-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Label
         * @return object
         *
         */
        createLabel: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.OptionDialog

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createOptionDialog-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.OptionDialog
         * @return object
         *
         */
        createOptionDialog: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Picker

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createPicker-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Picker
         * @return object
         *
         */
        createPicker: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.PickerColumn

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createPickerColumn-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.PickerColumn
         * @return object
         *
         */
        createPickerColumn: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.PickerRow

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createPickerRow-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.PickerRow
         * @return object
         *
         */
        createPickerRow: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ProgressBar

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createProgressBar-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ProgressBar
         * @return object
         *
         */
        createProgressBar: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ScrollView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createScrollView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ScrollView
         * @return object
         *
         */
        createScrollView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.ScrollableView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createScrollableView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.ScrollableView
         * @return object
         *
         */
        createScrollableView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.SearchBar

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createSearchBar-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.SearchBar
         * @return object
         *
         */
        createSearchBar: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Slider

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createSlider-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Slider
         * @return object
         *
         */
        createSlider: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Switch

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createSwitch-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Switch
         * @return object
         *
         */
        createSwitch: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Tab

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTab-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Tab
         * @return object
         *
         */
        createTab: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TabGroup

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTabGroup-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TabGroup
         * @return object
         *
         */
        createTabGroup: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TabbedBar

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTabbedBar-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TabbedBar
         * @return object
         *
         */
        createTabbedBar: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TableView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTableView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TableView
         * @return object
         *
         */
        createTableView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TableViewRow

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTableViewRow-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TableViewRow
         * @return object
         *
         */
        createTableViewRow: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TableViewSection

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTableViewSection-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TableViewSection
         * @return object
         *
         */
        createTableViewSection: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TextArea

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTextArea-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TextArea
         * @return object
         *
         */
        createTextArea: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.TextField

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createTextField-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.TextField
         * @return object
         *
         */
        createTextField: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Toolbar

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createToolbar-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Toolbar
         * @return object
         *
         */
        createToolbar: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.View

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.View
         * @return object
         *
         */
        createView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.WebView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createWebView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.WebView
         * @return object
         *
         */
        createWebView: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.UI.Window

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.createWindow-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.UI.Window
         * @return object
         *
         */
        createWindow: function(parameters) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Map module.  The Map module is used for creating in-application native maps.

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map-module }
     *
     *
     */
    Map: {
        /**
         * An Annotation object that is created by the method Titanium.Map.createAnnotation. This object gives you low level control over annotations that can be added to a Map View.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation-object.html }
         *
         *
         */
        Annotation: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

        }

        ,
        /**
         * The MapView is an object created by Titanium.Map.createView and is used for embedding native mapping capabilities as a view in your application.  With native maps, you can control the mapping location, the type of map, the zoom level and you can add custom annotations directly to the map.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView-object.html }
         *
         *
         */
        MapView: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add a new annotation to the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.addAnnotation-method.html }
             *
             * @param object annotation either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
             * @return void
             *
             */
            addAnnotation: function(annotation) {
            }

            ,
            /**
             * add one or more new annotation to the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.addAnnotations-method.html }
             *
             * @param array annotations an array of either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
             * @return void
             *
             */
            addAnnotations: function(annotations) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * add a route. currently only supported on iphone

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.addRoute-method.html }
             *
             * @param object route dictionary with the properties: name route name, points dictionary of values with longitude and latitude keys, color for the line color and width for the line width.
             * @return void
             *
             */
            addRoute: function(route) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * cause the annotation to be deselected (hidden).

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.deselectAnnotation-method.html }
             *
             * @param string,object annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
             * @return void
             *
             */
            deselectAnnotation: function(annotation) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * removes all annotations added to the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.removeAllAnnotations-method.html }
             *
             * @return void
             *
             */
            removeAllAnnotations: function() {
            }

            ,
            /**
             * remove an existing annotation from the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.removeAnnotation-method.html }
             *
             * @param string,object annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
             * @return void
             *
             */
            removeAnnotation: function(annotation) {
            }

            ,
            /**
             * remove one or more existing annotations from the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.removeAnnotations-method.html }
             *
             * @param array annotation an array of either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
             * @return void
             *
             */
            removeAnnotations: function(annotation) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * remove a previously added route. currently only supported on iphone

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.removeRoute-method.html }
             *
             * @param object route same route object used during addRoute
             * @return void
             *
             */
            removeRoute: function(route) {
            }

            ,
            /**
             * cause the annotation to be selected (shown).

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.selectAnnotation-method.html }
             *
             * @param string,object annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
             * @return void
             *
             */
            selectAnnotation: function(annotation) {
            }

            ,
            /**
             * set and center the map location.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.setLocation-method.html }
             *
             * @param object location a dictionary that specifies the following properties specifying the location to set the map: latitudeDelta, longitudeDelta, latitude, longitude.
             * @return void
             *
             */
            setLocation: function(location) {
            }

            ,
            /**
             * set the type of map (satellite, hybrid, standard)

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.setMapType-method.html }
             *
             * @param int mapType the map type constant of either Titanium.Map.STANDARD_TYPE, Titanium.Map.SATELLITE_TYPE or Titanium.Map.HYBRID_TYPE.
             * @return void
             *
             */
            setMapType: function(mapType) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

            ,
            /**
             * zoom in or out of the map

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView.zoom-method.html }
             *
             * @param double level zoom level (can be positive or negative)
             * @return void
             *
             */
            zoom: function(level) {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * create and return an instance of Titanium.Map.Annotation

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.createAnnotation-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Map.Annotation
         * @return object
         *
         */
        createAnnotation: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Map.MapView

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.createMapView-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Map.MapView
         * @return object
         *
         */
        createMapView: function(parameters) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Analytics module.  The Analytics module is used for transmitting developer-defined Analytics event for your application to the Appcelerator Analytics product. It can be used to augment additional context or application-specific information which can then be accessed during analysis using Analytics.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics-module }
     *
     *
     */
    Analytics: {
        /**
         * send a generic event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.addEvent-method.html }
         *
         * @param string type the event type
         * @param string name the event name
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        addEvent: function(type, name, data) {
        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * send an analytics feature event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.featureEvent-method.html }
         *
         * @param string name the event name
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        featureEvent: function(name, data) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * send an analytics nav event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.navEvent-method.html }
         *
         * @param string from the from location in the nav event
         * @param string to the to location in the nav event
         * @param string name the event name
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        navEvent: function(from, to, name, data) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * send a analytics settings event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.settingsEvent-method.html }
         *
         * @param string name the event name
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        settingsEvent: function(name, data) {
        }

        ,
        /**
         * send an analytics timed event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.timedEvent-method.html }
         *
         * @param string name the event name
         * @param date start the event start as a Date object
         * @param date stop the event end as a Date object
         * @param float duration the event duration
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        timedEvent: function(name, start, stop, duration, data) {
        }

        ,
        /**
         * send an analytics user event for the application session

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Analytics.userEvent-method.html }
         *
         * @param string name the event name
         * @param object data event data or null if not specified. the object must be serializable as JSON
         * @return void
         *
         */
        userEvent: function(name, data) {
        }

    }

    ,
    /**
     * Buffer is a container for raw data. A buffer is created by the method Titanium.createBuffer.

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer-object.html }
     *
     *
     */
    Buffer: {
        /**
         * appends sourceBuffer to the current buffer.  Buffer is grown dynamically to accommodate the additional data if need be.  returns the number of bytes appended. Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.append-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to append to current buffer
         * @param Number sourceOffset (Optional) offset to start reading buffer data from
         * @param Number sourceLength (Optional) length of data to read from buffer
         * @return Number
         *
         */
        append: function(sourceBuffer, sourceOffset, sourceLength) {
        }

        ,
        /**
         * Clears buffer contents but does not change the size of the buffer

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.clear-method.html }
         *
         * @return void
         *
         */
        clear: function() {
        }

        ,
        /**
         * create new copy of the current buffer.  Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.clone-method.html }
         *
         * @param Number offset (Optional) offset of buffer to start clone
         * @param Number length (Optional) length of buffer data starting at offset to clone
         * @return Titanium.Buffer
         *
         */
        clone: function(offset, length) {
        }

        ,
        /**
         * copies the contents of sourceBuffer into the current buffer at offset.  will not expand buffer if there is not enough room in the current buffer to accomodate all the requested data from sourceBuffer.  returns the number of bytes copied.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.copy-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to copy into current buffer
         * @param Number offset offset to copy new buffer at
         * @param Number sourceOffset (Optional) offset of sourceBuffer to copy data from
         * @param Number sourceLength (Optional) length of data from sourceBuffer to copy
         * @return Number
         *
         */
        copy: function(sourceBuffer, offset, sourceOffset, sourceLength) {
        }

        ,
        /**
         * fills buffer with fillByte.  Optional offset and length arguments to specify that filling should occur starting at particular offset and finish when length bytes have been written or the end of the buffer is reached.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.fill-method.html }
         *
         * @param Number fillByte byte to fill buffer with
         * @param Number offset (Optional) offset of where to start fill
         * @param Number length (Optional) number of bytes to fill
         * @return void
         *
         */
        fill: function(fillByte, offset, length) {
        }

        ,
        /**
         * inserts sourceBuffer into the current buffer at offset.  Buffer is grown to accommodate the new data.  returns the number of bytes inserted.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.insert-method.html }
         *
         * @param Titanium.Buffer sourceBuffer buffer to insert into current buffer
         * @param Number offset offset to insert new buffer at
         * @param Number sourceOffset (Optional) offset of sourceBuffer to insert data from
         * @param Number sourceLength (Optional) length of data from sourceBuffer to insert
         * @return Number
         *
         */
        insert: function(sourceBuffer, offset, sourceOffset, sourceLength) {
        }

        ,
        /**
         * Releases the space allocated to the buffer, sets length to 0.  This is effectively the same as buffer.length = 0

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.release-method.html }
         *
         * @return void
         *
         */
        release: function() {
        }

        ,
        /**
         * Converts this buffer to a Titanium.Blob

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.toBlob-method.html }
         *
         * @return Titanium.Blob
         *
         */
        toBlob: function() {
        }

        ,
        /**
         * Converts this buffer to a String

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Buffer.toString-method.html }
         *
         * @return String
         *
         */
        toString: function() {
        }

    }

    ,
    /**
     * The top level Database module.  The Database module is used for creating and accessing the in-application Database.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module }
     *
     *
     */
    Database: {
        /**
         * The Database instance returned by Titanium.Database.open or Titanium.Database.install.

         * @since 0.1
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.DB-object.html }
         *
         *
         */
        DB: {
            /**
             * close the database and release resources from memory. once closed, this instance is no longer valid and must no longer be used.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.DB.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * execute a SQL statement against the database and returns a ResultSet

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.DB.execute-method.html }
             *
             * @param string sql the SQL to execute
             * @param Array vararg one or more optional variable arguments passed to this function or an array of objects to be replaced in the query using ? substitution.
             * @return object
             *
             */
            execute: function(sql, vararg) {
            }

            ,
            /**
             * remove the database files for this instance from disk. WARNING: this is a destructive operation and cannot be reversed. All data in the database will be lost upon calling this function. Use with caution.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.DB.remove-method.html }
             *
             * @return void
             *
             */
            remove: function() {
            }

        }

        ,
        /**
         * The ResultSet instance returned by invoking a database SQL execute.

         * @since 0.1
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet-object.html }
         *
         *
         */
        ResultSet: {
            /**
             * close the result set and release resources. once closed, this result set must no longer be used

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * retrieve a row value by field index

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.field-method.html }
             *
             * @param int index column index (which is zero based)
             * @param int type [optional] one of (Titanium.Database.FIELD_TYPE_STRING | Titanium.Database.FIELD_TYPE_INT | Titanium.Database.FIELD_TYPE_FLOAT | Titanium.Database.FIELD_TYPE_DOUBLE)
             * @return object
             *
             */
            field: function(index, type) {
            }

            ,
            /**
             * retrieve a row value by field name

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.fieldByName-method.html }
             *
             * @param string name column name from SQL query
             * @param int type [optional] one of (Titanium.Database.FIELD_TYPE_STRING | Titanium.Database.FIELD_TYPE_INT | Titanium.Database.FIELD_TYPE_FLOAT | Titanium.Database.FIELD_TYPE_DOUBLE)
             * @return object
             *
             */
            fieldByName: function(name, type) {
            }

            ,
            /**
             * return the number of columns in the result set

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.fieldCount-method.html }
             *
             * @return int
             *
             */
            fieldCount: function() {
            }

            ,
            /**
             * return the field name for field index

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.fieldName-method.html }
             *
             * @param int index field name column index (which is zero based)
             * @return string
             *
             */
            fieldName: function(index) {
            }

            ,
            /**
             * return true if the row is a valid row

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.isValidRow-method.html }
             *
             * @return boolean
             *
             */
            isValidRow: function() {
            }

            ,
            /**
             * iterate to the next row in the result set. returns false if no more results are available

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet.next-method.html }
             *
             * @return boolean
             *
             */
            next: function() {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * install a database from the application Resources folder (at build time) and return a reference to the opened database. it is safe to call this method multiple times since this method will only install once if it doesn't already exist on the device.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.install-method.html }
         *
         * @param string path the path (relative to the main application Resources folder at build time) to the db to install. this file must be in the SQLite 3 file format.
         * @param string name the name of the database
         * @return object
         *
         */
        install: function(path, name) {
        }

        ,
        /**
         * open a database. if it doesn't yet exist, create it.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.open-method.html }
         *
         * @param string name the name of the database
         * @return object
         *
         */
        open: function(name) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level XML module.  The XML module is used parsing and processing XML-based content.

     * @since 0.9
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML-module }
     *
     *
     */
    XML: {
        /**
         * The DOMDocument returned from Titanium.XML.parseString. The result is an object that implementes the DOM Level 2 API.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.DOMDocument-object.html }
         *
         *
         */
        DOMDocument: {
        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * parse an XML string into a DOMDocument

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.parseString-method.html }
         *
         * @param string xml the XML content as a string
         * @return object
         *
         */
        parseString: function(xml) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * serialize a DOMDocument or DOMNode and its descendants into an XML string

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.serializeToString-method.html }
         *
         * @param DOMNode node the XML DOMNode or DOMDocument to serialize
         * @return string
         *
         */
        serializeToString: function(node) {
        }

    }

    ,
    /**
     * The top level Filesystem module.  The Filesystem module is used for reading and saving files and
     * directories on the device.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem-module }
     *
     *
     */
    Filesystem: {
        /**
         * The File object which support various filesystem based operations.

         * @since 0.1
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File-object.html }
         *
         *
         */
        File: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * create a directory at the path for the file object

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.createDirectory-method.html }
             *
             * @return boolean
             *
             */
            createDirectory: function() {
            }

            ,
            /**
             * create a file path at the path for the file object

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.createFile-method.html }
             *
             * @return boolean
             *
             */
            createFile: function() {
            }

            ,
            /**
             * return the created timestamp for the file

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.createTimestamp-method.html }
             *
             * @return long
             *
             */
            createTimestamp: function() {
            }

            ,
            /**
             * delete the file directory path

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.deleteDirectory-method.html }
             *
             * @param boolean recursive pass true to recursively delete any contents. defaults to false
             * @return boolean
             *
             */
            deleteDirectory: function(recursive) {
            }

            ,
            /**
             * delete the file

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.deleteFile-method.html }
             *
             * @return boolean
             *
             */
            deleteFile: function() {
            }

            ,
            /**
             * returns true if the file is executable

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.executable-method.html }
             *
             * @return boolean
             *
             */
            executable: function() {
            }

            ,
            /**
             * returns true if the file or directory exists on the device

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.exists-method.html }
             *
             * @return boolean
             *
             */
            exists: function() {
            }

            ,
            /**
             * return the file extension

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.extension-method.html }
             *
             * @return string
             *
             */
            extension: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * return an array of paths in the directory of the file object

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.getDirectoryListing-method.html }
             *
             * @return array
             *
             */
            getDirectoryListing: function() {
            }

            ,
            /**
             * return the file parent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.getParent-method.html }
             *
             * @return Titanium.Filesystem.File
             *
             */
            getParent: function() {
            }

            ,
            /**
             * returns true if the file is hidden

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.hidden-method.html }
             *
             * @return boolean
             *
             */
            hidden: function() {
            }

            ,
            /**
             * return the last modification timestamp for the file

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.modificationTimestamp-method.html }
             *
             * @return long
             *
             */
            modificationTimestamp: function() {
            }

            ,
            /**
             * move the file to another path

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.move-method.html }
             *
             * @param string|object newpath new location
             * @return boolean
             *
             */
            move: function(newpath) {
            }

            ,
            /**
             * the name of the file

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.name-method.html }
             *
             * @return string
             *
             */
            name: function() {
            }

            ,
            /**
             * returns the fully resolved native path

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.nativePath-method.html }
             *
             * @return string
             *
             */
            nativePath: function() {
            }

            ,
            /**
             * return the contents of file as blob

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.read-method.html }
             *
             * @return Titanium.Blob
             *
             */
            read: function() {
            }

            ,
            /**
             * returns true if the file is readonly

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.readonly-method.html }
             *
             * @return boolean
             *
             */
            readonly: function() {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * rename the file

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.rename-method.html }
             *
             * @param string newname new name
             * @return boolean
             *
             */
            rename: function(newname) {
            }

            ,
            /**
             * make the file executable

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.setExecutable-method.html }
             *
             * @return void
             *
             */
            setExecutable: function() {
            }

            ,
            /**
             * make the file hidden

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.setHidden-method.html }
             *
             * @return void
             *
             */
            setHidden: function() {
            }

            ,
            /**
             * make the file readonly

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.setReadonly-method.html }
             *
             * @return void
             *
             */
            setReadonly: function() {
            }

            ,
            /**
             * return boolean to indicate if the path has space available for storage

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.spaceAvailable-method.html }
             *
             * @return boolean
             *
             */
            spaceAvailable: function() {
            }

            ,
            /**
             * returns true if the file points to a symbolic link

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.symbolicLink-method.html }
             *
             * @return boolean
             *
             */
            symbolicLink: function() {
            }

            ,
            /**
             * write the contents to file.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.write-method.html }
             *
             * @param string|object contents write the contents of string, blob or [[Titanium.Filesystem.File]] to file
             * @param boolean append (optional) append the string to the end of the file.
             * @return boolean
             *
             */
            write: function(contents, append) {
            }

            ,
            /**
             * returns true if the file is writeable

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.File.writeable-method.html }
             *
             * @return boolean
             *
             */
            writeable: function() {
            }

        }

        ,
        /**
         * Wrapper around Titanium.Filesystem.File that implements the Titanium.IOStream interface.

         * @since 1.7
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream-object.html }
         *
         *
         */
        FileStream: {
            /**
             * closes stream and throws exception on error

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * reads true if stream is readable, false otherwise

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream.isReadable-method.html }
             *
             * @return Boolean
             *
             */
            isReadable: function() {
            }

            ,
            /**
             * reads true if stream is writeable, false otherwise

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream.isWriteable-method.html }
             *
             * @return Boolean
             *
             */
            isWriteable: function() {
            }

            ,
            /**
             * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream.read-method.html }
             *
             * @param Titanium.Buffer buffer buffer to read stream data into
             * @param Number offset (Optional) offset to start reading buffer data from
             * @param Number length (Optional) length of data to read from buffer
             * @return Number
             *
             */
            read: function(buffer, offset, length) {
            }

            ,
            /**
             * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.FileStream.write-method.html }
             *
             * @param Titanium.Buffer buffer buffer to write to stream
             * @param Number offset (Optional) offset to start writing buffer data from
             * @param Number length (Optional) length of data to write from buffer
             * @return Number
             *
             */
            write: function(buffer, offset, length) {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * create and return an instance of Titanium.Filesystem.File

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.createFile-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Filesystem.File
         * @return object
         *
         */
        createFile: function(parameters) {
        }

        ,
        /**
         * create temp file and return a Titanium.Filesystem.File

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.createTempDirectory-method.html }
         *
         * @return Titanium.Filesystem.File
         *
         */
        createTempDirectory: function() {
        }

        ,
        /**
         * create a temp file and return a Titanium.Filesystem.File

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.createTempFile-method.html }
         *
         * @return Titanium.Filesystem.File
         *
         */
        createTempFile: function() {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * return a fully formed file path as a Titanium.Filesystem.File object

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.getFile-method.html }
         *
         * @param string path one or more path arguments to form the full path joined together with the platform specific path separator. if a relative path is passed, the full path will be relative to the application resource folder.
         * @return Titanium.Filesystem.File
         *
         */
        getFile: function(path) {
        }

        ,
        /**
         * returns true if the android device supports external storage such as an SD card. Returns false on iOS.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.isExternalStoragePresent-method.html }
         *
         * @return boolean
         *
         */
        isExternalStoragePresent: function() {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level API module.  The API module is mainly used for logging.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API-module }
     *
     *
     */
    API: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * function for logging debug messages

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.debug-method.html }
         *
         * @param string message the message to log
         * @return void
         *
         */
        debug: function(message) {
        }

        ,
        /**
         * function for logging error messages

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.error-method.html }
         *
         * @param string message the message to log
         * @return void
         *
         */
        error: function(message) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * function for logging informational messages

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.info-method.html }
         *
         * @param string message the message to log
         * @return void
         *
         */
        info: function(message) {
        }

        ,
        /**
         * function for logging custom severity messages

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.log-method.html }
         *
         * @param string level the log level
         * @param string message the message to log
         * @return void
         *
         */
        log: function(level, message) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * function for logging warning messages

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.API.warn-method.html }
         *
         * @param string message the message to log
         * @return void
         *
         */
        warn: function(message) {
        }

    }

    ,
    /**
     * The top level Facebook module.  The Facebook module is used for connecting your application with
     * Facebook through the Facebook Graph API (see requestWithGraphPath) or the deprecated Facebook REST API (see request).
     * Due to how the facebook login process works on iOS, your app will need to have the following in your tiapp.xml if you target those platforms:
     * your_app_id_here
     *
     * You must still set Ti.Facebook.appid within your app itself to use the facebook module.  This property is used only for configuring your app to interface with the facebook login process.

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook-module }
     *
     *
     */
    Facebook: {
        /**
         * The Login Button created by Titanium.Facebook.createLoginButton.  This is a Facebook-themed button that does not require a click event handler or any listeners.  It "just works" and changes its label to reflect the current state of the Facebook session.  For example, if the user is already logged in, this button will show "Logout".

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton-object.html }
         *
         *
         */
        LoginButton: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.LoginButton.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * Login the user (if not already logged in) and authorize your application.  Be sure to set your desired permissions and your appid before calling this.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.authorize-method.html }
         *
         * @return void
         *
         */
        authorize: function() {
        }

        ,
        /**
         * create and return an instance of Titanium.Facebook.LoginButton

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.createLoginButton-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Facebook.LoginButton
         * @return object
         *
         */
        createLoginButton: function(parameters) {
        }

        ,
        /**
         * Open a supported Facebook dialog.  "feed" is just about the only useful one.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.dialog-method.html }
         *
         * @param string action Specifies which dialog to show, such as "feed".
         * @param object params A dictionary object for pre-filling some of the dialog's fields.  See example.
         * @param function callback A callback for when dialog is completed/cancelled.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "cancelled" (set to true if user cancelled) and "result" (the data returned by Facebook.)
         * @return void
         *
         */
        dialog: function(action, params, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * Clear the OAuth accessToken and logout the user.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.logout-method.html }
         *
         * @return void
         *
         */
        logout: function() {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * Make a request to the deprecated Facebook REST API.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.request-method.html }
         *
         * @param string method The REST API method to call.
         * @param object params A dictionary object for setting parameters required by the call, if any.  See examples.
         * @param function callback A callback for when call is completed.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "method" (the REST method call you specified), "result" (the data returned by Facebook.)
         * @return void
         *
         */
        request: function(method, params, callback) {
        }

        ,
        /**
         * Make a Facebook Graph API request.  If the request requires user authorization, be sure user is already logged-in and your app is authorized.  (You can check loggedIn for that.)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Facebook.requestWithGraphPath-method.html }
         *
         * @param string path The graph API path to request.  For example, "me" requests [information about the logged-in user](http://developers.facebook.com/docs/reference/api/user/).
         * @param object params A dictionary object for setting parameters required by the call, if any.  See examples.
         * @param string httpMethod The http method (GET/POST/DELETE) to use for the call.
         * @param function callback A callback for when call is completed.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "path" (the graph call path you specified), "result" (the JSON returned by Facebook.)
         * @return void
         *
         */
        requestWithGraphPath: function(path, params, httpMethod, callback) {
        }

    }

    ,
    /**
     * The top level Accelerometer module.  The Accelerometer modules contains methods and properties for using the device accelerometer.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Accelerometer-module }
     *
     *
     */
    Accelerometer: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Accelerometer.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Accelerometer.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Accelerometer.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Yahoo-module }
     *
     *
     */
    Yahoo: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Yahoo.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Yahoo.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Yahoo.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * invoke a Yahoo YQL query

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Yahoo.yql-method.html }
         *
         * @param string yql the YQL query to execute
         * @param function callback the function to execute when the query completes. The event will contain the boolean property success if successful. If success is false, the message property will contain the error message. If success is true, the data property will contain the data payload received from the YQL.
         * @return void
         *
         */
        yql: function(yql, callback) {
        }

    }

    ,
    /**
     * Wrapper around Titanium.Buffer that implements the Titanium.IOStream interface

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream-object.html }
     *
     *
     */
    BufferStream: {
        /**
         * closes stream and throws exception on error

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.close-method.html }
         *
         * @return void
         *
         */
        close: function() {
        }

        ,
        /**
         * reads true if stream is readable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.isReadable-method.html }
         *
         * @return Boolean
         *
         */
        isReadable: function() {
        }

        ,
        /**
         * reads true if stream is writeable, false otherwise

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.isWriteable-method.html }
         *
         * @return Boolean
         *
         */
        isWriteable: function() {
        }

        ,
        /**
         * reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.read-method.html }
         *
         * @param Titanium.Buffer buffer buffer to read stream data into
         * @param Number offset (Optional) offset to start reading buffer data from
         * @param Number length (Optional) length of data to read from buffer
         * @return Number
         *
         */
        read: function(buffer, offset, length) {
        }

        ,
        /**
         * writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.BufferStream.write-method.html }
         *
         * @param Titanium.Buffer buffer buffer to write to stream
         * @param Number offset (Optional) offset to start writing buffer data from
         * @param Number length (Optional) length of data to write from buffer
         * @return Number
         *
         */
        write: function(buffer, offset, length) {
        }

    }

    ,
    /**
     * The top level Media module.  The Media module is used accessing the device's media related  functionality such as playing audio or recording video.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module }
     *
     *
     */
    Media: {
        /**
         * The AudioPlayer object is returned by Titanium.Media.createAudioPlayer and is used for streaming audio to the device and low-level control of the audio playback.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer-object.html }
         *
         *
         */
        AudioPlayer: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * pause playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * control the playback of the audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.setPaused-method.html }
             *
             * @param boolean paused pass true to pause the current playback temporarily, false to unpause it
             * @return void
             *
             */
            setPaused: function(paused) {
            }

            ,
            /**
             * change the url of the audio playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.setUrl-method.html }
             *
             * @param string url the new url
             * @return void
             *
             */
            setUrl: function(url) {
            }

            ,
            /**
             * start playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.start-method.html }
             *
             * @return void
             *
             */
            start: function() {
            }

            ,
            /**
             * convert a state into a textual description suitable for display

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.stateDescription-method.html }
             *
             * @return string
             *
             */
            stateDescription: function() {
            }

            ,
            /**
             * stop playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioPlayer.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

        }

        ,
        /**
         * The AudioRecorder object is returned by Titanium.Media.createAudioRecorder and is used for recording audio from the device microphone.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder-object.html }
         *
         *
         */
        AudioRecorder: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * called to temporarily pause recording

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * called to resume audio recording

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.resume-method.html }
             *
             * @return void
             *
             */
            resume: function() {
            }

            ,
            /**
             * called to start recording audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.start-method.html }
             *
             * @return void
             *
             */
            start: function() {
            }

            ,
            /**
             * called to stop recording audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.AudioRecorder.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

        }

        ,
        /**
         * A representation of a media item returned by the music picker as part of the items array in the dictionary passed to its success function.

         * @since 1.4.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Item-object.html }
         *
         *
         */
        Item: {
        }

        ,
        /**
         * The MusicPlayer instance returned from Titanium.Media.createMusicPlayer.  This object represents a music controller.

         * @since 1.4.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer-object.html }
         *
         *
         */
        MusicPlayer: {
            /**
             * pause playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * begin playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.play-method.html }
             *
             * @return void
             *
             */
            play: function() {
            }

            ,
            /**
             * seek backward in the currently playing media

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.seekBackward-method.html }
             *
             * @return void
             *
             */
            seekBackward: function() {
            }

            ,
            /**
             * seek forward in the currently playing media

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.seekForward-method.html }
             *
             * @return void
             *
             */
            seekForward: function() {
            }

            ,
            /**
             * set the media queue

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.setQueue-method.html }
             *
             * @param object queue a queue representation to set the player queue to.  Can be any of: A dictionary with an items key that is an array of Titanium.Media.Item objects, an array of Titanium.Media.Item objects, or a single Titanium.Media.Item object.
             * @return void
             *
             */
            setQueue: function(queue) {
            }

            ,
            /**
             * skip to the beginning of the currently playing media

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.skipToBeginning-method.html }
             *
             * @return void
             *
             */
            skipToBeginning: function() {
            }

            ,
            /**
             * skip to the next media in the queue

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.skipToNext-method.html }
             *
             * @return void
             *
             */
            skipToNext: function() {
            }

            ,
            /**
             * skip to the previous media in the queue

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.skipToPrevious-method.html }
             *
             * @return void
             *
             */
            skipToPrevious: function() {
            }

            ,
            /**
             * stop playback

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

            ,
            /**
             * end a seek operation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.MusicPlayer.stopSeeking-method.html }
             *
             * @return void
             *
             */
            stopSeeking: function() {
            }

        }

        ,
        /**
         * The Sound object is returned by Titanium.Media.createSound and is useful for playing basic sounds. The Sound object loads the entire media resource in memory before playing.  If you need to support streaming, use the Titanium.Media.createAudioPlayer API.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound-object.html }
         *
         *
         */
        Sound: {
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * return the current time position of the audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.getTime-method.html }
             *
             * @return double
             *
             */
            getTime: function() {
            }

            ,
            /**
             * return the value of the audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.getVolume-method.html }
             *
             * @return float
             *
             */
            getVolume: function() {
            }

            ,
            /**
             * returns true if the audio will loop

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.isLooping-method.html }
             *
             * @return boolean
             *
             */
            isLooping: function() {
            }

            ,
            /**
             * returns true if the audio is paused

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.isPaused-method.html }
             *
             * @return boolean
             *
             */
            isPaused: function() {
            }

            ,
            /**
             * returns true if the audio is playing

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.isPlaying-method.html }
             *
             * @return boolean
             *
             */
            isPlaying: function() {
            }

            ,
            /**
             * temporarily pause the audio. to resume, invoke play.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * starting playing the source. if paused, will resume.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.play-method.html }
             *
             * @return void
             *
             */
            play: function() {
            }

            ,
            /**
             * release all internal resources. this is typically unnecessary but can be useful if you load a large audio file in app.js and play it only once and you would like to release all releases after your final play to reduce memory.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.release-method.html }
             *
             * @return void
             *
             */
            release: function() {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * reset the audio to the beginning.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.reset-method.html }
             *
             * @return void
             *
             */
            reset: function() {
            }

            ,
            /**
             * control whether the audio should loop

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.setLooping-method.html }
             *
             * @return void
             *
             */
            setLooping: function() {
            }

            ,
            /**
             * control whether the audio is paused

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.setPaused-method.html }
             *
             * @return void
             *
             */
            setPaused: function() {
            }

            ,
            /**
             * set the time position of the audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.setTime-method.html }
             *
             * @return void
             *
             */
            setTime: function() {
            }

            ,
            /**
             * set the volume of the audio

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.setVolume-method.html }
             *
             * @return void
             *
             */
            setVolume: function() {
            }

            ,
            /**
             * stop playing the audio and reset it to the beginning.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

        }

        ,
        /**
         * The VideoPlayer object is returned by Titanium.Media.createVideoPlayer and is useful for playing videos.

         * @since 0.9
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer-object.html }
         *
         *
         */
        VideoPlayer: {
            /**
             * add a child to the view hierarchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.add-method.html }
             *
             * @param object view the view to add to this views hiearchy
             * @return void
             *
             */
            add: function(view) {
            }

            ,
            /**
             * add an event listener for the instance to receive view triggered events

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.addEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function to invoke when the event is fired
             * @return void
             *
             */
            addEventListener: function(name, callback) {
            }

            ,
            /**
             * animate the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.animate-method.html }
             *
             * @param object obj either a dictionary of animation properties or an Animation object
             * @param function callback function to be invoked upon completion of the animation
             * @return void
             *
             */
            animate: function(obj, callback) {
            }

            ,
            /**
             * Cancels all pending asynchronous thumbnail requests.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.cancelAllThumbnailImageRequests-method.html }
             *
             * @return void
             *
             */
            cancelAllThumbnailImageRequests: function() {
            }

            ,
            /**
             * fire a synthesized event to the views listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.fireEvent-method.html }
             *
             * @param string name name of the event
             * @param object event event object
             * @return void
             *
             */
            fireEvent: function(name, event) {
            }

            ,
            /**
             * hide the view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.hide-method.html }
             *
             * @return void
             *
             */
            hide: function() {
            }

            ,
            /**
             * pause playing the video. On iOS only available under 3.2 and later

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.pause-method.html }
             *
             * @return void
             *
             */
            pause: function() {
            }

            ,
            /**
             * start playing the video

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.play-method.html }
             *
             * @return void
             *
             */
            play: function() {
            }

            ,
            /**
             * release the internal video resources immediately.  this is not usually necessary but can help if you no longer need to use the player after it is used to help converse memory.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.release-method.html }
             *
             * @return void
             *
             */
            release: function() {
            }

            ,
            /**
             * remove a previously add view from the view hiearchy

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.remove-method.html }
             *
             * @param object view the view to remove from this views hiearchy
             * @return void
             *
             */
            remove: function(view) {
            }

            ,
            /**
             * remove a previously added event listener

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.removeEventListener-method.html }
             *
             * @param string name name of the event
             * @param function callback callback function passed in addEventListener
             * @return void
             *
             */
            removeEventListener: function(name, callback) {
            }

            ,
            /**
             * Asynchronously request thumbnails for one or more times, provided as an array of numbers (double). Fires a thumbnail event on completion. Optionally invokes the callback function passed in the method.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes-method.html }
             *
             * @param array times array of doubles for each time to request
             * @param int option either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]].
             * @return void
             *
             */
            requestThumbnailImagesAtTimes: function(times, option) {
            }

            ,
            /**
             * A view for customization which is always displayed behind movie content.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.setBackgroundView-method.html }
             *
             * @param object view view to set
             * @return void
             *
             */
            setBackgroundView: function(view) {
            }

            ,
            /**
             * the a non-url based media to play, either a File or Blob.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.setMedia-method.html }
             *
             * @param object media media to play
             * @return void
             *
             */
            setMedia: function(media) {
            }

            ,
            /**
             * the url to play

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.setUrl-method.html }
             *
             * @param string url the url to play
             * @return void
             *
             */
            setUrl: function(url) {
            }

            ,
            /**
             * make the view visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.show-method.html }
             *
             * @return void
             *
             */
            show: function() {
            }

            ,
            /**
             * stop playing the video

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

            ,
            /**
             * Returns a thumbnail at the given time as a blob.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.thumbnailImageAtTime-method.html }
             *
             * @param double time playback time
             * @param int option either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]]
             * @return object
             *
             */
            thumbnailImageAtTime: function(time, option) {
            }

            ,
            /**
             * return a Blob image of the rendered view

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer.toImage-method.html }
             *
             * @param function f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
             * @return object
             *
             */
            toImage: function(f) {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * play a device beep notification

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.beep-method.html }
         *
         * @return void
         *
         */
        beep: function() {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.AudioPlayer

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createAudioPlayer-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.AudioPlayer
         * @return object
         *
         */
        createAudioPlayer: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.AudioRecorder

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createAudioRecorder-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.AudioRecorder
         * @return object
         *
         */
        createAudioRecorder: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.Item

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createItem-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.Item
         * @return object
         *
         */
        createItem: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.MusicPlayer

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createMusicPlayer-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.MusicPlayer
         * @return object
         *
         */
        createMusicPlayer: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.Sound

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createSound-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.Sound
         * @return object
         *
         */
        createSound: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Media.VideoPlayer

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createVideoPlayer-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Media.VideoPlayer
         * @return object
         *
         */
        createVideoPlayer: function(parameters) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * hide the device camera UI. this must be called after calling showCamera and only when autohide is set to false. this method will cause the media capture device be hidden.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.hideCamera-method.html }
         *
         * @return void
         *
         */
        hideCamera: function() {
        }

        ,
        /**
         * hide the music library.  This must be called after calling showMusicLibrary and only when autohide is set to false.  iPhone and iPad only.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.hideMusicLibrary-method.html }
         *
         * @return void
         *
         */
        hideMusicLibrary: function() {
        }

        ,
        /**
         * return boolean to indicate if the media type is supported

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.isMediaTypeSupported-method.html }
         *
         * @param string media media type as a string of either camera, photo or photogallery.
         * @param string type the type of media to check
         * @return boolean
         *
         */
        isMediaTypeSupported: function(media, type) {
        }

        ,
        /**
         * open the photo gallery picker

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.openPhotoGallery-method.html }
         *
         * @param object options pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the camera should auto hide after the media capture is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, saveToPhotoGallery boolean if the media should be saved to the photo gallery upon successful capture, allowEditing boolean if the media should be editable after capture in the UI interface, mediaTypes an array of media type constants supported by the capture device UI, showControls boolean to indicate if the built-in UI controls should be displayed, overlay view which is added as an overlay to the UI (on top), transform an transformation matrix that applies to the UI transform. For iPad, popoverView can be provided to position the photo gallery popover a specific view and arrowDirection can be provided to control the type of arrow and position of the gallery.
         * @return void
         *
         */
        openPhotoGallery: function(options) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * save media to photo gallery / camera roll

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.saveToPhotoGallery-method.html }
         *
         * @param object media save the media passed to the cameras photo roll/media gallery. must be one of Blob object or File object or an error will be generated.
         * @param object callbacks pass a dictionary with the following supported keys: success a function that will be called when the save succeeds, and error a function that will be called upon anreceiving an error
         * @return void
         *
         */
        saveToPhotoGallery: function(media, callbacks) {
        }

        ,
        /**
         * show the camera

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.showCamera-method.html }
         *
         * @param object options pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the camera should auto hide after the media capture is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, saveToPhotoGallery boolean if the media should be saved to the photo gallery upon successful capture, allowEditing boolean if the media should be editable after capture in the UI interface, mediaTypes an array of media type constants supported by the capture device UI, videoMaximumDuration float duration on how long in milliseconds to allow capture before completing, videoQuality constant to indicate the video quality during capture, showControls boolean to indicate if the built-in UI controls should be displayed, overlay view which is added as an overlay to the camera UI (on top), transform an transformation matrix that applies to the camera UI transform.
         * @return void
         *
         */
        showCamera: function(options) {
        }

        ,
        /**
         * show the music library.  iPhone and iPad only.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.showMusicLibrary-method.html }
         *
         * @param object options pass a dictionary with the following supported keys: success a function that will be called when the camera is completed, error a function that will be called upon receiving an error, cancel a function that will be called if the user presses the cancel button, autohide boolean if the library listing should auto hide after selection is completed (defaults to true), animated boolean if the dialog should be animated (defaults to true) upon showing and hiding, mediaTypes an array of media type constants defining selectable media (see MUSIC_MEDIA_TYPE_* properties below) as either an array or a bitwise-or single value, allowMultipleSelections boolean whether or not more than one media selection is allowed
         * @return void
         *
         */
        showMusicLibrary: function(options) {
        }

        ,
        /**
         * start the monitoring of microphone sound level

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.startMicrophoneMonitor-method.html }
         *
         * @return void
         *
         */
        startMicrophoneMonitor: function() {
        }

        ,
        /**
         * stop the monitoring of microphone sound level

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.stopMicrophoneMonitor-method.html }
         *
         * @return void
         *
         */
        stopMicrophoneMonitor: function() {
        }

        ,
        /**
         * use the device camera to capture a photo. this must be called after calling showCamera and only when autohide is set to false. this method will cause the media capture device to capture a photo and call the success callback.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.takePicture-method.html }
         *
         * @return void
         *
         */
        takePicture: function() {
        }

        ,
        /**
         * take a screen shot of the visible UI on the device

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.takeScreenshot-method.html }
         *
         * @param function callback function that will be called upon capture. the event property media will contain an image Blob object of the screenshot
         * @return void
         *
         */
        takeScreenshot: function(callback) {
        }

        ,
        /**
         * play a device vibration

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.vibrate-method.html }
         *
         * @return void
         *
         */
        vibrate: function() {
        }

    }

    ,
    /**
     * The top level Utils module.  The Utils module is a set of common JavaScript functions that are
     * useful for applications.

     * @since 0.9
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils-module }
     *
     *
     */
    Utils: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * decode a Base64 string

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.base64decode-method.html }
         *
         * @param string str the string to use for the input
         * @return string
         *
         */
        base64decode: function(str) {
        }

        ,
        /**
         * encode a string into Base64

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.base64encode-method.html }
         *
         * @param string str the string to use for the input
         * @return string
         *
         */
        base64encode: function(str) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * compute a MD5 hash algorithm against the input and return a hex-based string

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.md5HexDigest-method.html }
         *
         * @param string str the string to use for the input
         * @return string
         *
         */
        md5HexDigest: function(str) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Android module. Ti.Android.currentActivity provides each context an Activity. This object cannot be created directly.

     * @since 1.5
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android-module.html }
     *
     *
     */
    Android: {
        /**
         * The Titanium binding of an Android Activity

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity-object.html }
         *
         *
         */
        Activity: {
            /**
             * Called when the activity is done and should be closed. Also see Android's documentation for finish

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.finish-method.html }
             *
             * @return void
             *
             */
            finish: function() {
            }

            ,
            /**
             * Returns the Titanium.Android.Intent that was used to start this Activity.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.getIntent-method.html }
             *
             * @return Titanium.Android.Intent
             *
             */
            getIntent: function() {
            }

            ,
            /**
             * Get an Android or Application string using the passed-in Resource ID and optional format arguments. Also see Android's documentation for getString and String Resources

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.getString-method.html }
             *
             * @param int resourceId A Resource ID from the Application or Android.
             * @param Array format Optional format arguments for the String resource
             * @return string
             *
             */
            getString: function(resourceId, format) {
            }

            ,
            /**
             * Set the requested Activity orientation. Also see Android's documentation for setRequestedOrientation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.setRequestedOrientation-method.html }
             *
             * @param int orientation Can be one of Titanium.Android.SCREEN_ORIENTATION_BEHIND, Titanium.Android.SCREEN_ORIENTATION_LANDSCAPE, Titanium.Android.SCREEN_ORIENTATION_NOSENSOR, Titanium.Android.SCREEN_ORIENTATION_PORTRAIT, Titanium.Android.SCREEN_ORIENTATION_SENSOR, Titanium.Android.SCREEN_ORIENTATION_UNSPECIFIED, Titanium.Android.SCREEN_ORIENTATION_USER
             * @return void
             *
             */
            setRequestedOrientation: function(orientation) {
            }

            ,
            /**
             * Sets the result of this Activity using an Intent. This should be used in the case when the Activity responds to startActivityForResult. Also see Android's documentation for setResult

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.setResult-method.html }
             *
             * @param int resultCode The result code for this Activity. Must be one of Titanium.Android.RESULT_OK, Titanium.Android.RESULT_CANCELED, Titanium.Android.RESULT_FIRST_USER
             * @param Titanium.Android.Intent intent An optional Titanium.Android.Intent with extra result data
             * @return void
             *
             */
            setResult: function(resultCode, intent) {
            }

            ,
            /**
             * Starts a new Activity, using the passed in Intent as the description. Also see Android's documentation for startActivity

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.startActivity-method.html }
             *
             * @param Titanium.Android.Intent intent Description of the Activity to start
             * @return void
             *
             */
            startActivity: function(intent) {
            }

            ,
            /**
             * The same as startActivity, but also accepts a callback function for handling the result of the started Activity. Also see Android's documentation for startActivityForResult

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Activity.startActivityForResult-method.html }
             *
             * @param Titanium.Android.Intent intent Description of the Activity to start
             * @param function callback A callback function that is executed when the Activity has set it's result. See example in Titanium.Android.Activity.
             * @return void
             *
             */
            startActivityForResult: function(intent, callback) {
            }

        }

        ,
        /**
         * The Titanium binding of an Android Intent

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent-object.html }
         *
         *
         */
        Intent: {
            /**
             * Add a category to this Intent. See the category constants in Titanium.Android.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.addCategory-method.html }
             *
             * @param string name The category name. See the category constants in Titanium.Android
             * @return void
             *
             */
            addCategory: function(name) {
            }

            ,
            /**
             * augment the existing flags on the Intent.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.addFlags-method.html }
             *
             * @param int flags the flags to add to the existing set.
             * @return void
             *
             */
            addFlags: function(flags) {
            }

            ,
            /**
             * Get a boolean property from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getBooleanExtra-method.html }
             *
             * @param string name The boolean property to get
             * @return boolean
             *
             */
            getBooleanExtra: function(name) {
            }

            ,
            /**
             * Get the Data URI from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getData-method.html }
             *
             * @return void
             *
             */
            getData: function() {
            }

            ,
            /**
             * Get a double property from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getDoubleExtra-method.html }
             *
             * @param string name The double property to get
             * @return double
             *
             */
            getDoubleExtra: function(name) {
            }

            ,
            /**
             * Get a int property from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getIntExtra-method.html }
             *
             * @param string name The int property to get
             * @return int
             *
             */
            getIntExtra: function(name) {
            }

            ,
            /**
             * Get a long property from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getLongExtra-method.html }
             *
             * @param string name The long property to get
             * @return int
             *
             */
            getLongExtra: function(name) {
            }

            ,
            /**
             * Get a string property from this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.getStringExtra-method.html }
             *
             * @param string name The string property to get
             * @return string
             *
             */
            getStringExtra: function(name) {
            }

            ,
            /**
             * Returns whether or not this Intent has a property

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.hasExtra-method.html }
             *
             * @param string name The property name to check for
             * @return boolean
             *
             */
            hasExtra: function(name) {
            }

            ,
            /**
             * Put an extra property on this Intent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.putExtra-method.html }
             *
             * @param string name The property name
             * @param object value The property value
             * @return void
             *
             */
            putExtra: function(name, value) {
            }

            ,
            /**
             * Put a URI property on this Intent (useful for Titanium.Android.EXTRA_STREAM)

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Intent.putExtraUri-method.html }
             *
             * @param string name The property name
             * @param string value The URI string
             * @return void
             *
             */
            putExtraUri: function(name, value) {
            }

        }

        ,
        /**
         * The Titanium binding of an Android Menu

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu-object.html }
         *
         *
         */
        Menu: {
            /**
             * creates a Titanium.Android.MenuItem from the passed creation options.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.add-method.html }
             *
             * @param object options creation options. Supported options are itemId, groupId, title, and order.
             * @return Titanium.Android.MenuItem
             *
             */
            add: function(options) {
            }

            ,
            /**
             * clear all items from the menu. You should release all references you have retained to Titanium.Android.MenuItem previously created.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.clear-method.html }
             *
             * @return void
             *
             */
            clear: function() {
            }

            ,
            /**
             * close the menu if visible

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * locate a Titanium.Android.MenuItem

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.findItem-method.html }
             *
             * @param object item integer itemId or Titanium.Android.MenuItem
             * @return Titanium.Android.MenuItem
             *
             */
            findItem: function(item) {
            }

            ,
            /**
             * return the Titanium.Android.MenuItem at a specific index

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.getItem-method.html }
             *
             * @param int index item at index where index < size()
             * @return Titanium.Android.MenuItem
             *
             */
            getItem: function(index) {
            }

            ,
            /**
             * query for any visible menu items

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.hasVisibleItems-method.html }
             *
             * @return boolean
             *
             */
            hasVisibleItems: function() {
            }

            ,
            /**
             * remove all Titanium.Android.MenuItem with the specified groupId

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.removeGroup-method.html }
             *
             * @param int groupId groupId of items to remove.
             * @return void
             *
             */
            removeGroup: function(groupId) {
            }

            ,
            /**
             * remove a specific Titanium.Android.MenuItem by the specified itemId

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.removeItem-method.html }
             *
             * @param int itemId itemId of item to remove.
             * @return void
             *
             */
            removeItem: function(itemId) {
            }

            ,
            /**
             * enable or disable a group of Titanium.Android.MenuItem by groupId

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.setGroupEnabled-method.html }
             *
             * @param int groupId groupId to enable or disable
             * @param boolean enabled true to enable, false to disable.
             * @return void
             *
             */
            setGroupEnabled: function(groupId, enabled) {
            }

            ,
            /**
             * show or hide a group of Titanium.Android.MenuItem by groupId

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.setGroupVisible-method.html }
             *
             * @param int groupId groupId to enable or disable
             * @param boolean visible true to show, false to hide
             * @return void
             *
             */
            setGroupVisible: function(groupId, visible) {
            }

            ,
            /**
             * number of Titanium.Android.MenuItem in this menu

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Menu.size-method.html }
             *
             * @return int
             *
             */
            size: function() {
            }

        }

        ,
        /**
         * The Titanium binding of an Android MenuItem

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem-object.html }
         *
         *
         */
        MenuItem: {
            /**
             * retrieve the condensed title of the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.getCondensedTitle-method.html }
             *
             * @return string
             *
             */
            getCondensedTitle: function() {
            }

            ,
            /**
             * retrieve the groupId for this item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.getGroupId-method.html }
             *
             * @return int
             *
             */
            getGroupId: function() {
            }

            ,
            /**
             * retrieve the itemId for this item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.getItemId-method.html }
             *
             * @return int
             *
             */
            getItemId: function() {
            }

            ,
            /**
             * retrieve the sort order

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.getOrder-method.html }
             *
             * @return int
             *
             */
            getOrder: function() {
            }

            ,
            /**
             * retrieve the title of the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.getTitle-method.html }
             *
             * @return string
             *
             */
            getTitle: function() {
            }

            ,
            /**
             * retrieve the enabled state of the menu

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.isEnabled-method.html }
             *
             * @return boolean
             *
             */
            isEnabled: function() {
            }

            ,
            /**
             * retrieve the visible state of the menu

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.isVisible-method.html }
             *
             * @return boolean
             *
             */
            isVisible: function() {
            }

            ,
            /**
             * set the condensed title for the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.setCondensedTitle-method.html }
             *
             * @param string condensedTitle new condensed title
             * @return void
             *
             */
            setCondensedTitle: function(condensedTitle) {
            }

            ,
            /**
             * set the enabled state of the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.setEnabled-method.html }
             *
             * @param boolean enabled true to enable item, false to disable
             * @return void
             *
             */
            setEnabled: function(enabled) {
            }

            ,
            /**
             * set the icon for the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.setIcon-method.html }
             *
             * @param object icon icon to use with the item
             * @return void
             *
             */
            setIcon: function(icon) {
            }

            ,
            /**
             * set the title for the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.setTitle-method.html }
             *
             * @param string title new title
             * @return void
             *
             */
            setTitle: function(title) {
            }

            ,
            /**
             * set the visible state of the item

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.MenuItem.setVisible-method.html }
             *
             * @param boolean visible true to show the item, false to hide
             * @return void
             *
             */
            setVisible: function(visible) {
            }

        }

        ,
        /**
         * The Titanium binding of an Android Notification.

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Notification-object.html }
         *
         *
         */
        Notification: {
            /**
             * Sets the latest event info using the builtin Notification View for this notification. See Android's documentation for setLatestEventInfo

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Notification.setLatestEventInfo-method.html }
             *
             * @return void
             *
             */
            setLatestEventInfo: function() {
            }

        }

        ,
        /**
         * The Titanium binding of an Android Pending Intent

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.PendingIntent-object.html }
         *
         *
         */
        PendingIntent: {
        }

        ,
        /**
         * The Titanium binding of android.R.  Note that this accesses Android system-wide resources, not your application's resources.  To access your application's resources, you want Titanium.App.Android.R.

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.R-object.html }
         *
         *
         */
        R: {
        }

        ,
        /**
         * The Titanium binding of Android RemoteViews. RemoteViews are an API for referencing and updating views that live in another process (i.e. in a Titanium.Android.Notification)

         * @since 1.6
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews-object.html }
         *
         *
         */
        RemoteViews: {
            /**
             * Call a method taking one boolean on a view in the layout for this RemoteViews. See Android's documentation for setBoolean

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setBoolean-method.html }
             *
             * @param int viewId The resource id of the View (also see Titanium.App.Android.R)
             * @param string methodName The name of the method to call
             * @param boolean value The boolean to pass to the method
             * @return void
             *
             */
            setBoolean: function(viewId, methodName, value) {
            }

            ,
            /**
             * Sets a chronometer's base, format, and started flag. See Android's documentation for setChronometer

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setChronometer-method.html }
             *
             * @param int viewId The resource id of the Chronometer whose values will change (also see Titanium.App.Android.R)
             * @param date base The time at which the timer would have read 0:00
             * @param string format The Chronometer format string, or null to simply display the timer value
             * @param boolean started True if you want the clock to be started, false if not
             * @return void
             *
             */
            setChronometer: function(viewId, base, format, started) {
            }

            ,
            /**
             * Call a method taking one double on a view in the layout for this RemoteViews. See Android's documentation for setDouble

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setDouble-method.html }
             *
             * @param int viewId The resource id of the View (also see Titanium.App.Android.R)
             * @param string methodName The name of the method to call
             * @param double value The double to pass to the method
             * @return void
             *
             */
            setDouble: function(viewId, methodName, value) {
            }

            ,
            /**
             * Sets an ImageView's source given a Resource ID. See Android's documentation for setImageViewResource

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setImageViewResource-method.html }
             *
             * @param int viewId The resource id of the ImageView whose image should change (also see Titanium.App.Android.R)
             * @param int srcId The resource id of the image
             * @return void
             *
             */
            setImageViewResource: function(viewId, srcId) {
            }

            ,
            /**
             * Sets an ImageView's source given a URI (supports both Android and Titanium URLs). See Android's documentation for setImageViewUri

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setImageViewUri-method.html }
             *
             * @param int viewId The resource id of the ImageView whose image should change (also see Titanium.App.Android.R)
             * @param string uri The URI of the image (both Android and Titanium URLs are supported)
             * @return void
             *
             */
            setImageViewUri: function(viewId, uri) {
            }

            ,
            /**
             * Call a method taking one int on a view in the layout for this RemoteViews. See Android's documentation for setInt

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setInt-method.html }
             *
             * @param int viewId The resource id of the View (also see Titanium.App.Android.R)
             * @param string methodName The name of the method to call
             * @param int value The int to pass to the method
             * @return void
             *
             */
            setInt: function(viewId, methodName, value) {
            }

            ,
            /**
             * Launches a Titanium.Android.PendingIntent when the specified view is clicked. See Android's documentation for setOnClickPendingIntent

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setOnClickPendingIntent-method.html }
             *
             * @param int viewId The resource id of the View to add a click listener to (also see Titanium.App.Android.R)
             * @param Ti.Android.PendingIntent pendingIntent The PendingIntent to execute when this view is clicked
             * @return void
             *
             */
            setOnClickPendingIntent: function(viewId, pendingIntent) {
            }

            ,
            /**
             * Sets the progress, max value, and indeterminate flag of a ProgressBar. See Android's documentation for setProgressBar

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setProgressBar-method.html }
             *
             * @param int viewId The resource id of the ProgressBar to change (also see Titanium.App.Android.R)
             * @param int max The new max value of the ProgressBar
             * @param int progress The new progress value of the ProgressBar (from 0..max)
             * @param boolean indeterminate Whether or not the progress in indeterminate
             * @return void
             *
             */
            setProgressBar: function(viewId, max, progress, indeterminate) {
            }

            ,
            /**
             * Call a method taking one String on a view in the layout for this RemoteViews. See Android's documentation for setString

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setString-method.html }
             *
             * @param int viewId The resource id of the View (also see Titanium.App.Android.R)
             * @param string methodName The name of the method to call
             * @param string value The String to pass to the method
             * @return void
             *
             */
            setString: function(viewId, methodName, value) {
            }

            ,
            /**
             * Sets the text color of a view. See Android's documentation for setTextColor

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setTextColor-method.html }
             *
             * @param int viewId The resource id of the View whose text color will change (also see Titanium.App.Android.R)
             * @param int color A color as an integer
             * @return void
             *
             */
            setTextColor: function(viewId, color) {
            }

            ,
            /**
             * Sets the text of a TextView. See Android's documentation for setTextViewText

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setTextViewText-method.html }
             *
             * @param int viewId The resource id of the TextView whose text will change (also see Titanium.App.Android.R)
             * @param string text The new text of the TextView
             * @return void
             *
             */
            setTextViewText: function(viewId, text) {
            }

            ,
            /**
             * Call a method taking one Uri on a view in the layout for this RemoteViews. See Android's documentation for setUri

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setUri-method.html }
             *
             * @param int viewId The resource id of the View (also see Titanium.App.Android.R)
             * @param string methodName The name of the method to call
             * @param string value The URI (as a string) to pass to the method
             * @return void
             *
             */
            setUri: function(viewId, methodName, value) {
            }

            ,
            /**
             * Sets the visibility of a View. See Android's documentation for setViewVisibility

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.RemoteViews.setViewVisibility-method.html }
             *
             * @param int viewId The resource id of the View whose visibility will change (also see Titanium.App.Android.R)
             * @param int visibility The visibility, one of Titanium.Android.VISIBLE, Titanium.Android.INVISIBLE, or Titanium.Android.GONE
             * @return void
             *
             */
            setViewVisibility: function(viewId, visibility) {
            }

        }

        ,
        /**
         * The Titanium binding of an Android Service.  Can be used to start/stop the service directly and listen for service-specific events.  In the Javascript-based services you write, this can be referenced with Titanium.Android.currentService.  You can create an instance of the service with Titanium.Android.createService.

         * @since 1.5
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Service-object.html }
         *
         *
         */
        Service: {
            /**
             * Start the Service.  Effective only if this instance of Titanium.Android.Service was created with Titanium.Android.createService.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Service.start-method.html }
             *
             * @return void
             *
             */
            start: function() {
            }

            ,
            /**
             * Stop this running instance of the Service.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.Service.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * Create a Titanium.Android.Intent to be used to start a Broadcast.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createBroadcastIntent-method.html }
         *
         * @return Titanium.Android.Intent
         *
         */
        createBroadcastIntent: function() {
        }

        ,
        /**
         * Create a Titanium.Android.Intent. Used to start other Activities and for marshaling data.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createIntent-method.html }
         *
         * @return Titanium.Android.Intent
         *
         */
        createIntent: function() {
        }

        ,
        /**
         * Display chooser interface to allow selection of desired target.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createIntentChooser-method.html }
         *
         * @return Titanium.Android.Intent
         *
         */
        createIntentChooser: function() {
        }

        ,
        /**
         * Crate a Titanium.Android.Notification. Used to notify the user of an event.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createNotification-method.html }
         *
         * @param object options Options dictionary
         * @return Titanium.Android.Notification
         *
         */
        createNotification: function(options) {
        }

        ,
        /**
         * Create a Titanium.Android.PendingIntent to be used inside a Titanium.Android.Notification

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createPendingIntent-method.html }
         *
         * @param Titanium.Android.Intent intent The Intent that will be executed
         * @param int flags (optional, default: 0) Can be any of Titanium.Android.FLAG_CANCEL_CURRENT, Titanium.Android.FLAG_NO_CREATE, Titanium.Android.FLAG_ONE_SHOT, Titanium.Android.FLAG_UPDATE_CURRENT
         * @return Titanium.Android.PendingIntent
         *
         */
        createPendingIntent: function(intent, flags) {
        }

        ,
        /**
         * Create a Titanium.Android.Service so you can start/stop it and listen for events from it.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createService-method.html }
         *
         * @param Titanium.Android.Intent intent An Intent created with Titanium.Android.createServiceIntent which specifies the service to be instantiated.
         * @return Titanium.Android.Service
         *
         */
        createService: function(intent) {
        }

        ,
        /**
         * Create an Titanium.Android.Intent to be used to start a Service.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.createServiceIntent-method.html }
         *
         * @param object options Options dictionary -- pass in a url option to specify the path to a javascript-based service you create.
         * @return Titanium.Android.Intent
         *
         */
        createServiceIntent: function(options) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * Check on state of Service.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.isServiceRunning-method.html }
         *
         * @param Titanium.Android.Intent intent An Intent created with Titanium.Android.createServiceIntent which specifies the service to check.
         * @return boolean
         *
         */
        isServiceRunning: function(intent) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

        ,
        /**
         * Start a simple service

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.startService-method.html }
         *
         * @param Titanium.Android.Intent intent An Intent created with Titanium.Android.createServiceIntent which specifies the service to start.
         * @return void
         *
         */
        startService: function(intent) {
        }

        ,
        /**
         * Stop a simple service that was started with startService.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Android.stopService-method.html }
         *
         * @param Titanium.Android.Intent intent An Intent created with Titanium.Android.createServiceIntent which specifies the service to stop.
         * @return void
         *
         */
        stopService: function(intent) {
        }

    }

    ,
    /**
     * The top level Network module.  The Network module is used accessing Networking related functionality, including Titanium.Network.Socket

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network-module }
     *
     *
     */
    Network: {
        /**
         * The BonjourBrowser instance returned from Titanium.Network.createBonjourBrowser.  This object is a browser for the discovery and retrieval of Bonjour services available on the network.

         * @since 1.2.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourBrowser-object.html }
         *
         *
         */
        BonjourBrowser: {
            /**
             * Conduct a search for Bonjour services matching the type and domain specified during creation

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourBrowser.search-method.html }
             *
             * @return void
             *
             */
            search: function() {
            }

            ,
            /**
             * Halt an ongoing search

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourBrowser.stopSearch-method.html }
             *
             * @return void
             *
             */
            stopSearch: function() {
            }

        }

        ,
        /**
         * The BonjourService instance returned either from Titanium.Network.createBonjourService or via the service list from a BonjourBrowser updatedServices event.  This object describes a service on the network which is published by Bonjour.

         * @since 1.2.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourService-object.html }
         *
         *
         */
        BonjourService: {
            /**
             * Publish a Bonjour service to the network.  Only works if isLocal is TRUE

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourService.publish-method.html }
             *
             * @param object socket a TCPSocket object to associate with the Bonjour service.
             * @return void
             *
             */
            publish: function(socket) {
            }

            ,
            /**
             * Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourService.resolve-method.html }
             *
             * @param double timeout the timeout for service resolution, in seconds.  Optional, default is 120s.
             * @return void
             *
             */
            resolve: function(timeout) {
            }

            ,
            /**
             * Halts publication of a service.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.BonjourService.stop-method.html }
             *
             * @return void
             *
             */
            stop: function() {
            }

        }

        ,
        /**
         * The HttpClient instance returned from Titanium.Network.createHTTPClient. This object (mostly) implements the XMLHttpRequest specification.

         * @since 0.1
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient-object.html }
         *
         *
         */
        HTTPClient: {
            /**
             * abort a pending request

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.abort-method.html }
             *
             * @return void
             *
             */
            abort: function() {
            }

            ,
            /**
             * return the response header.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.getResponseHeader-method.html }
             *
             * @param string name the header name
             * @return string
             *
             */
            getResponseHeader: function(name) {
            }

            ,
            /**
             * open the request and ready the connection

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.open-method.html }
             *
             * @param string method the HTTP method
             * @param string url the URL for the request
             * @param boolean async optional property to indicate if asynchronous (default) or not
             * @return void
             *
             */
            open: function(method, url, async) {
            }

            ,
            /**
             * send the request (Only async is currently supported)

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.send-method.html }
             *
             * @param object data the data to send in the request. can either be null, dictionary, string, File object or Blob.
             * @return void
             *
             */
            send: function(data) {
            }

            ,
            /**
             * set the request header. Must be called after open but before send.

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.setRequestHeader-method.html }
             *
             * @param string name name of the header
             * @param string value value of the header. May be null to clearing out a property, such as X-Requested-With
             * @return void
             *
             */
            setRequestHeader: function(name, value) {
            }

            ,
            /**
             * set the request timeout

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient.setTimeout-method.html }
             *
             * @param double timeout the timeout in milliseconds
             * @return void
             *
             */
            setTimeout: function(timeout) {
            }

        }

        ,
        /**
         * DEPRECATED: USE Titanium.Network.Socket.TCP WHERE POSSIBLE.  The TCPSocket instance returned from Titanium.Network.createTCPSocket.  This object represents a socket which either listens locally on the device for connections, or connects to a remote machine.

         * @since 1.2.0
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.TCPSocket-object.html }
         *
         *
         */
        TCPSocket: {
            /**
             * close the socket

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.TCPSocket.close-method.html }
             *
             * @return void
             *
             */
            close: function() {
            }

            ,
            /**
             * connect the scocket to a TCP server

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.TCPSocket.connect-method.html }
             *
             * @return void
             *
             */
            connect: function() {
            }

            ,
            /**
             * set up the socket to receive connections

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.TCPSocket.listen-method.html }
             *
             * @return void
             *
             */
            listen: function() {
            }

            ,
            /**
             * write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE

             * @since 0.8
             * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.TCPSocket.write-method.html }
             *
             * @param object,string data either a string or blob object representing the data to be transferred
             * @param int sendTo the socket reference to send the data to.  Default is to send to all connected sockets
             * @return void
             *
             */
            write: function(data, sendTo) {
            }

        }

        ,
        /**
         * adds a connectivity listener to listen for network changes. This method has been deprecated in favor of listening for a change event.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.addConnectivityListener-method.html }
         *
         * @param function callback callback function to invoke upon network connectivity changes
         * @return void
         *
         */
        addConnectivityListener: function(callback) {
        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * create and return an instance of Titanium.Network.BonjourBrowser

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.createBonjourBrowser-method.html }
         *
         * @param string serviceType service to search for, must include the protocol type suffix (._tcp)
         * @param string domain the Bonjour service domain to conduct the search in.  Default value is 'local.'
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Network.BonjourBrowser
         * @return object
         *
         */
        createBonjourBrowser: function(serviceType, domain, parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Network.BonjourService

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.createBonjourService-method.html }
         *
         * @param string name the name of the service.  Must be a unique identifier for this service type and domain.
         * @param string type the type of service.  Must include the protocol identifier (._tcp)
         * @param string domain the domain to publish the service in.  Default value is 'local.'
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Network.BonjourService
         * @return object
         *
         */
        createBonjourService: function(name, type, domain, parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Network.HTTPClient

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.createHTTPClient-method.html }
         *
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Network.HTTPClient
         * @return object
         *
         */
        createHTTPClient: function(parameters) {
        }

        ,
        /**
         * create and return an instance of Titanium.Network.TCPSocket

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.createTCPSocket-method.html }
         *
         * @param string hostName the host name to connect to/listen on
         * @param int port the port for the socket
         * @param int mode the socket's mode; one of Titanium.Network.READ_MODE, Titanium.Network.WRITE_MODE, Titanium.Network.READ_WRITE_MODE
         * @param object parameters (optional) a dictionary object properties defined in Titanium.Network.TCPSocket
         * @return object
         *
         */
        createTCPSocket: function(hostName, port, mode, parameters) {
        }

        ,
        /**
         * decode a URI component part using URI encoding

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.decodeURIComponent-method.html }
         *
         * @param string value input value to be decoded
         * @return string
         *
         */
        decodeURIComponent: function(value) {
        }

        ,
        /**
         * encode a URI component part using URI encoding

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.encodeURIComponent-method.html }
         *
         * @param string value input value to be encoded
         * @return string
         *
         */
        encodeURIComponent: function(value) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * register for push notifications with the Apple Push Notification Service. Only available on iPhone.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.registerForPushNotifications-method.html }
         *
         * @param object config dictionary of the following: types is an array of type constants that the application would like to receive, success is a callback function that is called when the push registration is successfully completed, error is a callback function that is called when an error is received during registration and callback is a callback function that is invoked upon receiving a new push notification. This method should be called at application startup.
         * @return void
         *
         */
        registerForPushNotifications: function(config) {
        }

        ,
        /**
         * removes a connectivity listener. This method has been deprecated in favor of listening for a change event.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.removeConnectivityListener-method.html }
         *
         * @param function callback callback function to remove
         * @return void
         *
         */
        removeConnectivityListener: function(callback) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * A module for converting Numbers and Strings to and from a Titanium.Buffer.

     * @since 1.7
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec-module }
     *
     *
     */
    Codec: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * Decodes the source buffer (starting at the optional position) into a number using the passed in data type.  Throws an Exception if source is null, or position is greater than source.length

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.decodeNumber-method.html }
         *
         * @param Object options decodeNumber named options.  These are: source, the Titanium.Buffer to decode.  type, the encoding type to use, which must be one of Titanium.Codec.TYPE_BYTE, Titanium.Codec.TYPE_SHORT, Titanium.Codec.TYPE_INT, Titanium.Codec.TYPE_FLOAT, Titanium.Codec.TYPE_LONG, or Titanium.Codec.TYPE_DOUBLE.  position, the position in source to start at (optional, default is 0).  byteOrder, the byte order to decode with (optional, default is Titanium.Codec.getNativeByteOrder).
         * @return Number
         *
         */
        decodeNumber: function(options) {
        }

        ,
        /**
         * Decodes the source buffer into a String starting at position, with length bytes, using the supplied character set charset. Throws an Exception if charset is not a valid character set, source is null, or either position, length, or position+length is greater than source.length.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.decodeString-method.html }
         *
         * @param Object options decodeString named options.  These are: source, the Titanium.Buffer to decode.  position, the position to start decoding (optional, default is 0).  length, the number of bytes to decode (optional, default is the length of the source buffer).  charset, the character set to decode from (optional, default is Titanium.Codec.CHARSET_UTF8).
         * @return String
         *
         */
        decodeString: function(options) {
        }

        ,
        /**
         * Encodes the Number source into dest using the passed in data type.  Returns the position after the encoded number in dest.'

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.encodeNumber-method.html }
         *
         * @param Object options encodeNumber named options.  These are: source, the number to be encoded.  dest, the destination Titanium.Buffer into which the encoded number will be written.  type, the encoding type to use, which must be one of Titanium.Codec.TYPE_BYTE, Titanium.Codec.TYPE_SHORT, Titanium.Codec.TYPE_INT, Titanium.Codec.TYPE_FLOAT, Titanium.Codec.TYPE_LONG, or Titanium.Codec.TYPE_DOUBLE.  position, the position in dest to set the encoded data (optional, default is 0).  byteOrder, the byte order to encode with (optional, default is Titanium.Codec.getNativeByteOrder).
         * @return Number
         *
         */
        encodeNumber: function(options) {
        }

        ,
        /**
         * Encodes the String source into dest using charset. Returns the position after the encoded String inside dest.' Throws an Exception if charset is not a valid character set, source is null, or either sourcePosition, sourceLength, or sourcePosition+sourceLength is greater than source.length.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.encodeString-method.html }
         *
         * @param Object options encodeString named options.  These are: source, the source string to encode.  dest, the destination Titanium.Buffer.  destPosition, the position in dest to set the encoded string (optional, default is 0).  sourcePosition, the position in source to start encoding (optional, default is 0).  sourceLength, the number of characters in source to encode (optional, default is the length of the source).  charset, the character set to use when encoding this string to bytes (optional, default is Titanium.Codec.CHARSET_UTF8).
         * @return Number
         *
         */
        encodeString: function(options) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * Get the OS native byte order (either Titanium.Codec.BIG_ENDIAN or Titanium.Codec.LITTLE_ENDIAN)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.getNativeByteOrder-method.html }
         *
         * @return Number
         *
         */
        getNativeByteOrder: function() {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Codec.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Platform module.  The Platform module is used accessing the device's platform
     * related functionality.

     * @since 0.1
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform-module }
     *
     *
     */
    Platform: {
        /**
         * The Display Caps object returned by the Titanium.Platform.displayCaps property.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.DisplayCaps-object.html }
         *
         *
         */
        DisplayCaps: {
        }

        ,
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * returns whether or not a system URL can be opened. iOS only

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.canOpenURL-method.html }
         *
         * @param string url the url to check
         * @return void
         *
         */
        canOpenURL: function(url) {
        }

        ,
        /**
         * create a globally unique identifier

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.createUUID-method.html }
         *
         * @return string
         *
         */
        createUUID: function() {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * open a URL in the system default manner

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.openURL-method.html }
         *
         * @param string url the url to open
         * @return void
         *
         */
        openURL: function(url) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Platform.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * The top level Locale module.  The Locale module works with localization files to which are generated during compilation into the operating system specific localization formats. The Locale module provides locale-specific strings which can be referenced at runtime.  Additionally, the module contains a few methods and properties for querying device locale information.

     * @since 1.5
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale-module }
     *
     *
     */
    Locale: {
        /**
         * add an event listener for the instance to receive view triggered events

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.addEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function to invoke when the event is fired
         * @return void
         *
         */
        addEventListener: function(name, callback) {
        }

        ,
        /**
         * fire a synthesized event to the views listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.fireEvent-method.html }
         *
         * @param string name name of the event
         * @param object event event object
         * @return void
         *
         */
        fireEvent: function(name, event) {
        }

        ,
        /**
         * format a telephone number according to the current locale.

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.formatTelephoneNumber-method.html }
         *
         * @param string number the phone number to format
         * @return string
         *
         */
        formatTelephoneNumber: function(number) {
        }

        ,
        /**
         * return a currency code for a given locale. (Android only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.getCurrencyCode-method.html }
         *
         * @param string locale the locale for which you want to the currency code, e.g. getCurrencyCode('en-US') -> 'USD'
         * @return string
         *
         */
        getCurrencyCode: function(locale) {
        }

        ,
        /**
         * return a currency symbol for the given currency code. (Android only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.getCurrencySymbol-method.html }
         *
         * @param string currencyCode the currency for which you want the symbol, e.g. getCurrencySymbol('USD') -> '$'
         * @return string
         *
         */
        getCurrencySymbol: function(currencyCode) {
        }

        ,
        /**
         * return a currency symbol for the given locale. (Android only)

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.getLocaleCurrencySymbol-method.html }
         *
         * @param string locale the locale whose currency symbol you want, e.g. getLocaleCurrencySymbol('en-US') -> '$'
         * @return string
         *
         */
        getLocaleCurrencySymbol: function(locale) {
        }

        ,
        /**
         * return a localization string

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.getString-method.html }
         *
         * @param string key the key to use when mapping into the localization file
         * @param string hint the text to use if no key found in the localization file
         * @return string
         *
         */
        getString: function(key, hint) {
        }

        ,
        /**
         * remove a previously added event listener

         * @since 0.8
         * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Locale.removeEventListener-method.html }
         *
         * @param string name name of the event
         * @param function callback callback function passed in addEventListener
         * @return void
         *
         */
        removeEventListener: function(name, callback) {
        }

    }

    ,
    /**
     * add an event listener for the instance to receive view triggered events

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.addEventListener-method.html }
     *
     * @param string name name of the event
     * @param function callback callback function to invoke when the event is fired
     * @return void
     *
     */
    addEventListener: function(name, callback) {
    }

    ,
    /**
     * create and return an instance of Titanium.Blob

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.createBlob-method.html }
     *
     * @param object parameters (optional) a dictionary object properties defined in Titanium.Blob
     * @return object
     *
     */
    createBlob: function(parameters) {
    }

    ,
    /**
     * creates a new buffer based on the params

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.createBuffer-method.html }
     *
     * @param object params Key value pairs.  You can include: value, an optional initial value which will be encoded and placed in the buffer.  If value is a Number, type must also be set. This is simply a convenient way of calling Titanium.Codec.encodeString or Titanium.Codec.encodeNumber and placing the encoded value in the returned buffer.  length: the length of the buffer, with a default of 0 unless value is specified, in which case the length of the encoded value.  type, the type of data encoding to use with value, with Titanium.Codec.CHARSET_UTF8 being the default if value is a String, else this argument is required in the case of value being a number.  byteOrder, the byte order of this buffer, with the default being the OS native byte order is used by default (see Titanium.Codec.getNativeByteOrder).
     * @return Titanium.Buffer
     *
     */
    createBuffer: function(params) {
    }

    ,
    /**
     * fire a synthesized event to the views listener

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.fireEvent-method.html }
     *
     * @param string name name of the event
     * @param object event event object
     * @return void
     *
     */
    fireEvent: function(name, event) {
    }

    ,
    /**
     * one or more filenames to include as if the Javascript code was written in place.  This is similar to a C #include function.

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.include-method.html }
     *
     * @param string name filename to include
     * @return void
     *
     */
    include: function(name) {
    }

    ,
    /**
     * remove a previously added event listener

     * @since 0.8
     * {@link http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.removeEventListener-method.html }
     *
     * @param string name name of the event
     * @param function callback callback function passed in addEventListener
     * @return void
     *
     */
    removeEventListener: function(name, callback) {
    }

}

